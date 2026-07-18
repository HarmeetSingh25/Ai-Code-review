import api from "./axios.js";
export const reviewCode= async (data)=>{
    const response = await api.get("/review" , data)
    return response.data
}