import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  text: string;
  type: "text" | "link";
  createdAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    text: { type: String, required: true },
    type: { type: String, enum: ["text", "link"], required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Message ||
  mongoose.model<IMessage>("Message", MessageSchema);