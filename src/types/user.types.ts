import { Document } from "mongoose";
import { MessageModelInterface as Message } from "./message.types";

export interface UserModelInterface extends Document {
  username: string;
  password: string;
  email: string;
  isUserAcceptingMessage: boolean;
  messages: Message[];
  isVerified: boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
}
