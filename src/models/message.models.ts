import mongoose, { Schema } from "mongoose";
import { MessageModelInterface as Message } from "@/types/message.types";

export const MessageSchema: Schema<Message> = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
