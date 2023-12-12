import "dotenv/config";

export const PORT = +(process.env.PORT || 3001);
export const DATABASE_URL = process.env.DATABASE_URL as string; //POSTGRESQL
export const SECRET = process.env.TOKEN_SECRET as string;
