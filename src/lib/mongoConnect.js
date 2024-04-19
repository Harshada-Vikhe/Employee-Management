const { default: mongoose } = require("mongoose")


const ConnectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;