import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  line_items:Object,
  name:String,
  email:String,
  city:String,
  zip:String,
  address:String,
  state:String,
  paid:Boolean,
}, {
  timestamps: true,
});

export const Order = mongoose.models?.Order || mongoose.model('Order', OrderSchema);