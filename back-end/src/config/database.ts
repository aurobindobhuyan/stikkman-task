import mongoose from "mongoose";

export default () => {
  return mongoose.connect(process.env.MONGODB_URL);
};

mongoose.connection.on("error", (err: any) => {
  console.error.bind(console, "connection error:", err);
});
