const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = {
  OrderModel,
};
