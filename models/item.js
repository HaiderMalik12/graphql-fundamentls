import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    text: {
        type: String
    },
    time: {
      type: Number
    },
    timeISO:{
        type: String
    },
    title:{
        type: String,
        required: true
    },
    deleted:{
        type: Boolean
    }
});
export default mongoose.model('item', ItemSchema);