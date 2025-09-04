import dotenv from "dotenv";
dotenv.config();

export const config = {
  VITE_SUPABASE_PROJECT_ID: process.env.VITE_SUPABASE_PROJECT_ID as string,
};
