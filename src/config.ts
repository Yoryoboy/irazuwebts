import dotenv from "dotenv";
dotenv.config();

export const config = {
  RESEND_API_KEY: process.env.VITE_RESEND_API_KEY as string,
};
