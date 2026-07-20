import { useState } from "react";
import { codeReview } from "../services/review.service";

const useReview = () => {
  const [review, setreview] = useState(null);
  const [loading, setloading] = useState(false);

  const handelReview = async ( code, language) => {
    try {
        setloading(true);

      let resposne = await codeReview({
        code,
        language,
      });
      
      setreview(resposne.data);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return {
    loading,
    review,
    handelReview,
  };
};
export default useReview;
