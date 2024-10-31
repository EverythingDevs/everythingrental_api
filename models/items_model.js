import { toJSON } from "@reis/mongoose-to-json";
import { Schema, model } from "mongoose";

// will be updated to meet frontend demands
const itemSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true }
},
    {
        timestamps: true
    });

itemSchema.plugin(toJSON);

export const ItemModel = model("Item", itemSchema);
