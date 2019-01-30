//Importing lib's in MongoDB
import * as mongoose from 'mongoose';

//Declare const of function's in the mongoose
const Schema = mongoose.Schema;

//Create a model 
export const ContactSchema = new Schema({
    firstName:{
        type:String,
        required: 'First Name is required',
        trim:true
    },
    lastName:{
        type:String,
        required: 'Last Name is required',
        trim:true
    },
    email:{
        type:String
    },
    company:{
        type:String
    },
    phone:{
        type:Number
    },
    create_date:{
        type:Date,
        default: Date.now
    }

});