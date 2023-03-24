import connectDB from "@/middlewares/mongoose";

import workSpace from "@/models/workSpace";

const handler = async (req,res) =>{

      let workSpaces = await workSpace.find()

    res.status(200).json({workSpaces})

}
export default connectDB(handler);