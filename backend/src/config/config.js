import dotenv from "dotenv";
dotenv.config()
const config = {
    MONGODB_URL:process.env.MONGODB_URL,
    PORT:process.env.PORT,
    JWT_SCREAT:process.env.JWT_SCREAT

}
export default config