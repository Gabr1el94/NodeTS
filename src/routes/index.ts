//Import of express to Request and Rsponse
import {Request, Response} from "express";


//create first route in TS
export class Routes{

    //Method to a route default
    public routes(app): void{
        //Default
        app.route('/').get((req:Request, res:Response)=>{
            res.status(200).send({
                message: 'Get resquest successfull!'
            });
        }); 
        
        //GET Contact
        app.route('/contact').get((req:Request, res:Response)=>{
            res.status(200).send({
                message:'Get Contact request with successfull!'
            })
        });

        //POST Contact
        app.route('/contact').post((req:Request, res:Response)=>{
            res.status(200).send({
                message:'Post Contact resquest with successfull!'
            })
        });

        //GET - Details in the Contact
        app.route('/contact/:contactId').get((req:Request, res:Response)=>{
            res.status(200).send({
                message:'Get a Contact request with successfull!'
            })
        });


        //Update a contact 
        app.route('/contact/:contactId').put((req:Request, res:Response)=>{
            res.status(200).send({
                message:'Put a Contact request with successfull!'
            })
        });

        //Delete a contact 
        app.route('/contact/:contactId').delete((req:Request, res:Response)=>{
            res.status(200).send({
                message:'Delete a Contact request with successfull!'
            })
        });

    }
}