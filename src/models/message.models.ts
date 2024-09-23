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

/*
  NEXT-JS IS AN EDGE-TIME FRAMEWORK?
  NextJS is an edge-time framework, meaning it executes its operations at the edge of the network (i.e., closer to the client) and not at the origin server. This helps in reducing latency and improved performance. 

  Due to this edge-time nature of Next-JS, the backend server isn't running all the time. Instead, it is being run only when needed. Therefore, we need to check if the Message Model is already present in the database or not. If not, then we create a new model.
*/
const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
