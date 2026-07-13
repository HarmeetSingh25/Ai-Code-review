export const CodeReview = async(req,res)=>{
try {
    const data = await req.body
    console.log(data);
    res.status(201).json({
        data
    })
    
} catch (error) {
    
}
}