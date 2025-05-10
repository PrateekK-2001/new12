import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/error.js";

export const sendMessage= catchAsyncErrors (async(req,res,next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("please fill Full Form!",400
    // return res.status(400).json({
    //   success:false,
    //   message:"please Fill Full Form !",
    ));
  }
  
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({ 
    success: true,
    message: "Message Sent successfully!",
  });

}) 

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
 
