import { ChatMistralAI } from '@langchain/mistralai';
import config from "../config/config.js";
const ai = new ChatMistralAI({
    apiKey:config.MISTRAL_API_KEY,
    model: "mistral-medium-3-5",
})

export default ai