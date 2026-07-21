import { reiewcode } from "../services/ai.services.js";

export const CodeReview = async (req, res) => {
  try {
    let { code, language } = req.body;
    const data = await reiewcode(code, language);
    res.status(200).json(data);
  } catch (error) {
    throw new Error(error);
  }
};
