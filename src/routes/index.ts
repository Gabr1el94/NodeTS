//Import of express to Request and Rsponse
import {Request, Response} from "express";
import {ContactController} from '../controllers/crmContact';

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
        app.route('/contact').get(this.crmContact.getContacts);

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