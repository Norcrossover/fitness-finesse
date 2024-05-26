import mongoose, { mongo } from "mongoose";

interface IUser {
  name: string | null;
  email: string;
  password: string | null; // users can login just using Google, sometimes don't need password
  dateJoined: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: false },
  dateJoined: { type: Date, required: false },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
