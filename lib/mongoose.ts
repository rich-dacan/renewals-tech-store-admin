import mongoose from "mongoose";

export function mongooseConnect() {
  const uri = process.env.MONGODB_URI;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    if (uri) {
      return mongoose.connect(uri);
    }
  }
}
