import ai from "../lib/gemini.js";

export const reiewcode = async ({ code, language }) => {
  try {
    const prompt = `you are senior software engineer . 
    Review the following ${language} . Return : 
    - bugs 
    - performance issue
     - security issue
      - best practice
       - overall score
        - improved code 
    code : ${code}`;
    const response = await ai.invoke(prompt);
    return response.text;
  } catch (error) {
    throw new Error(error);
  }
};
