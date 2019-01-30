import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/index";
import * as mongoose from "mongoose";

class App{
    //add type data 
    public app: express.Application;
    public routePrv: Routes = new Routes();//instance to Routes
    public mongoUrl: any='mongodb://localhost:27017/CRMdb';

    //add Constructor
    constructor(){
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    //add Method config g='mongobd://localhost/CRMdb';
    private config():void{
        //support to app in json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended:false}));
    }


    //Method connect MONGODB
    private mongoSetup():void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{ useNewUrlParser: true }).catch(err=> console.log(err));
    }
}

export default new App().app;