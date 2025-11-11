import express from 'express';
import viewEngineConfig from './configs/viewEngine.js';
import initWebRoutes from './routes/web.js';
import { testConnection } from './configs/connectDB.js';
require('dotenv').config();

const app = express();

//khai bao view engine
viewEngineConfig(app);

//khai bao init web routes
initWebRoutes(app);



const PORT = process.env.PORT || 8083;


// Test database connection và start server
const startServer = async () => {
    // Test kết nối database
    await testConnection();
    
    // Start server
    app.listen(PORT, () => {
        console.log(`>>> Project is running on port: ${PORT}`);
    });
};

startServer();