//Import of express to Request and Rsponse
import {Request, Response} from "express";
import {ContactController} from '../controllers/crmContact';
import { NextFunction } from "connect";

//create first route in TS
export class Routes{

    public crmContact: ContactController = new ContactController();  

    //Method to a route default
    public routes(app): void{
        //Default
        app.route('/').get((req:Request, res:Response)=>{
            res.status(200).send({
                message: 'Get resquest successfull!'
            });
        }); 
        
        //GET Contact
        app.route('/contact').get((req:Request,res:Response,next:NextFunction)=>{
            if (req.query.key !== 'c5d715f3f6f6e3ee2f6ce238ed22fd38044e362b') {
                res.status(401).send('You shall not pass!')
            }else{
                next();
            }
        },this.crmContact.getContacts);

        //POST Contact
        app.route('/contact').post(this.crmContact.addNewContact);

        //GET - Details in the Contact
        app.route('/contact/:contactId').get(this.crmContact.getContactID);

        //Update a contact 
        app.route('/contact/:contactId').put(this.crmContact.updateContact);

        //Delete a contact 
        app.route('/contact/:contactId').delete(this.crmContact.deleteContactID);

    }
}