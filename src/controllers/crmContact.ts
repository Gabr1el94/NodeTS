import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/mdContact';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

//Create exporting class Controller 
export class ContactController{
 
    //Method SAVE data's news. 
    public addNewContact(req:Request, res:Response){
        //New instance class Contact
        let newContact = new Contact(req.body);
        
        newContact.save((err,contact)=>{
            if (err) {
                res.send(err);
            }
            
            res.json(contact);
        });
    }

    //Get all contacts
    public getContacts(req:Request,res:Response){
        Contact.find({}, (err,contact)=>{
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    //Get contact by ID
    public getContactID(req:Request,res:Response){
        Contact.findById(req.params.contactId, (err,contact)=>{
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    //PUT data's by ID
    public updateContact(req:Request, res:Response){
        Contact.findOneAndUpdate({_id:req.params.contactId},req.body,{new:true},(err,contact)=>{
            if (err) {
                res.send(err);
            }
            res.json(contact);
        })
    }

    //DELETE registry by ID 
    public deleteContactID(req:Request,res:Response){
        Contact.remove({_id:req.params.contactId}, (err,contact)=>{
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}