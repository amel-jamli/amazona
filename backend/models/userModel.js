import mongoose from 'mongoose';

const  UserSchema = new mongoose.Schema(
    {
    name: {type: string, required: true},
    email: {type: string, required: true, unique: true},
    password: {type: true, required: true},
    isAdmin: { type: Boolean, default: false, required: true},
}, 
{
    timestamps: true,
}
);
const User = mongoose.model('User', UserSchema);
export default User;