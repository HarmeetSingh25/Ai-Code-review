import { reiewcode } from "../services/ai.services.js";

export const CodeReview = async (req, res) => {
  try {
    const data = await reiewcode(req.body);
    res.status(201).json(
      data,
    );
  } catch (error) {}
};
