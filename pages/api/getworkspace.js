import connectDB from "@/middlewares/mongoose";

import workSpace from "@/models/workSpace";

const handler = async (req,res) =>{

     if(req.method=='POST')
     {
       
     }
     else
     {
      res.status(200).json({error:"This method is not allowed!"})
     }
      let workSpaces = await workSpace.find()

    res.status(200).json({workSpaces})

}
export default connectDB(handler);