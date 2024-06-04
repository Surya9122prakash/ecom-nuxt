import mongooseConnect from "~/server/plugins/dbConnection";
import { Order } from "~/server/models/Order";
import Product from "~/server/models/Product";
import Stripe from "stripe";
import { readBody } from "h3";
const stripe = Stripe(process.env.STRIPE_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return {message:'Should be a post request'};
    }

    try {
        const body = await readBody(req);
        console.log('Request Body:', body); // Log the request body to understand its content

        const { email, name, address, city, state, zip, cartProducts } = body;

        await mongooseConnect();

        const productIds = cartProducts;
        const uniqueIds = [...new Set(productIds)];
        const productsInfo = await Product.find({ _id: uniqueIds });

        let line_items = [];

        for (const productId of uniqueIds) {
            const productInfo = productsInfo.find(p => p._id.toString() === productId);

            const quantity = productIds.filter(id => id === productId)?.length || 0;

            if (quantity > 0 && productInfo) {
                line_items.push(
                    {
                        quantity,
                        price_data: {
                            currency: 'INR',
                            product_data: { name: productInfo.title },
                            unit_amount: productInfo.price * 100,
                        },
                    }
                )
            }
        }

        const orderDoc = await Order.create({
            line_items, email, name, address, city, state, zip, paid: false
        })

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            customer_email: email,
            success_url: process.env.SUCCESS_URL + '/cart?success=1',
            cancel_url: process.env.SUCCESS_URL + '/cart?canceled=1',
            metadata: { orderId: orderDoc._id.toString(), test: 'ok' }
        })

        return {
            url: session.url,
        };
    } catch (error) {
        console.error('Error processing request:', error);
        return { error: 'Internal Server Error' };
    }
}
