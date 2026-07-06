import app from './app.js';
import dotenv from 'dotenv'
dotenv.config();

//port 
const port=process.env.PORT || 5000

app.listen(port,(err)=>{
    if(err){
        console.log("Server is not runing ",err);
        process.exit(1);
        return;
     }
     console.log("Server is runing on port: ",port)

})
