import  express from 'express';
import testContoller from '../controller/testController.js';

const router = express.Router();

 const initWebRoutes = (app) => {
    router.get('/',testContoller.helloWorld);

      return  app.use("/", router);

 }

 export default initWebRoutes;  