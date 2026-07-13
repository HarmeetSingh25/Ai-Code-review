import app from "./src/app.js";
import config from "./src/config/config.js";
import { ConnectToDB } from "./src/config/db.js";

ConnectToDB()

app.listen(config.PORT , ()=>{
    console.log("Server is running ");
    
})