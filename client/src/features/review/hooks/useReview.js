import { useState } from "react";
import { codeReview } from "../services/review.service";

const useReview = () => {
  const [message, setmessage] = useState({
    role: "assistant",
    content: "Hi! Paste your code and ask anything ",
  });
  const [loading, setloading] = useState(false);

  const handelReview = async (code, prompt, language) => {
    try {
      setloading(true);

      let resposne = await codeReview({ language, code, prompt });
      console.log(resposne.data, "resposne");
return resposne.data
      // setmessage((prev) => [
      //   ...prev,
      //   {
      //     role: "user",
      //     content: prompt,
      //   },
      //   {
      //     role: "assitant",
      //     content: resposne.data,
      //   },
      // ]);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return {
    loading,
    message,
    handelReview,
  };
};
export default useReview;
