import Product from '~/server/models/Product';

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    try {
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.error(err);
        throw createError({ statusCode: 500, message: 'Product not found' });
    }
});
