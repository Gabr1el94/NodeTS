import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/index";

class App{
    //add type data 
    public app: express.Application;
    public routePrv: Routes = new Routes();//instance to Routes

    //add Constructor
    constructor(){
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    //add Method config 
    private config():void{
        //support to app in json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended:false}));
    }
}

export default new App().app;