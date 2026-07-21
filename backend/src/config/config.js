import dotenv from "dotenv";
dotenv.config()
const config = {
    MONGODB_URL:process.env.MONGODB_URL,
    PORT:process.env.PORT,
    JWT_SECRET:process.env.JWT_SCREAT,
    MISTRAL_API_KEY:process.env.MISTRAL_API_KEY

}
export default config