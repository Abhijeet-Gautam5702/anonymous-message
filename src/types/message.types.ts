import { Document } from "mongoose";

export interface MessageModelInterface extends Document {
  content: string;
  createdAt: Date;
}
