const asyncHandler = (requestHandler) => {
  (req, res, next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
};

export { asyncHandler };

//********************************************************************* */
// Using Try catch

// const asyncHandler = ()=>{}
// const asyncHandler = (func)=> () => {}
// const asyncHandler = (func)=> async () => {}

// const asyncHandler = (fn)=> async (req,res,next) => {
//     try {
//         await fn(req,res,next)//wrapper function that is used everywhere
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message,
//         })
//     }
//}//next is used for middleware
