import mongoose from 'mongoose';

const isMongoId = (id) => mongoose.Types.ObjectId.isValid(id);

export default isMongoId;
