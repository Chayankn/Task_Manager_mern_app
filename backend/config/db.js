import mongoose,{connect} from 'mongoose';

const connectDB =async()=>{
try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected Successfully");
} catch(err){
    console.error("MongoDB connection failed:"+err);
    process.exit(1);
}
}

export default connectDB;