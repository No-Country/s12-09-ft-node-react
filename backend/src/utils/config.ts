import 'dotenv/config'

export const PORT = +(process.env.PORT || 3001)
export const DATABASE_URL = process.env.DATABASE_URL as string //POSTGRESQL
export const SECRET = process.env.TOKEN_SECRET as string
export const MY_EMAIL = process.env.MY_EMAIL as string //NODEMAILER
export const MY_PASSWORD = process.env.MY_PASSWORD as string //NODEMAILER
