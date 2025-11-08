import express from 'express';
import viewEngineConfig from './configs/viewEngine.js';
import initWebRoutes from './routes/web.js';
require('dotenv').config();

const app = express();


//khai bao view engine
viewEngineConfig(app);

//khai bao init web routes
initWebRoutes(app);


const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {

    console.log((">>> Project is running onn port:" + PORT));

})