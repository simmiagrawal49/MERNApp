import mongoose from 'mongoose';

const connectDB = async () => {
  const mongo_url ="mongodb+srv://rootuser:87654@mysite-cluster.zp4hstj.mongodb.net/productStore?retryWrites=true&w=majority"

  try {
    const conn = await mongoose.connect(mongo_url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;