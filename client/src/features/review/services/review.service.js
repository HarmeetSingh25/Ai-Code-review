import axios from "../../../api/axios.js";

export const codeReview = async(data)=>{
    console.log("api call");
    return await axios.post("/review",data)
    

}