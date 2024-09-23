import mongoose, { Schema } from "mongoose";
import { UserModelInterface as User } from "@/types/user.types";
import { MessageSchema } from "./message.models";

const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      unique: true,
    },
    isUserAcceptingMessage: {
      type: Boolean,
      required: false,
    },
    messages: [MessageSchema],
    verifyCode: {
      type: String,
      required: [true, "Verify Code is required"],
    },
    verifyCodeExpiry: {
      type: Date,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

/*
  NEXT-JS IS AN EDGE-TIME FRAMEWORK?
  NextJS is an edge-time framework, meaning it executes its operations at the edge of the network (i.e., closer to the client) and not at the origin server. This helps in reducing latency and improved performance. 

  Due to this edge-time nature of Next-JS, the backend server isn't running all the time. Instead, it is being run only when needed. Therefore, we need to check if the User Model is already present in the database or not. If not, then we create a new model.
*/
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
