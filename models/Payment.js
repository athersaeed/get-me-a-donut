// model for payment

import mongoose from "mongoose";

const {Schema, model} = mongoose;

const paymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String },
    payment_id: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
})


export default mongoose.models.Payment || model("Payment", paymentSchema);