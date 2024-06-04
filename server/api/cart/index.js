import mongooseConnect from '../../plugins/dbConnection';
import Product from '../../models/Product'; // Assuming you have a Product model

export default defineEventHandler(async (event) => {
  await mongooseConnect();
  const body = await readBody(event);
  const { ids } = body;

  try {
    // Fetch products from the database using the ids
    const products = await Product.find({ _id: { $in: ids } });
    return products;
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: 'Failed to fetch products',
        error: error.message,
      },
    };
  }
});
