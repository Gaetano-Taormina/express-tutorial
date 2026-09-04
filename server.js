
// 1.import of the framework Express(Es Modules)
import express from "express";

//import cors for communication between different origins
import cors from "cors"; 


//2.inizialize the app and choise a port 
const app = express();
const PORT = 3000;


//middleware for parsing and security
app.use(cors());
//server can only process JSON data
app.use(express.json()); 


//3. define main routes get 
app.get('/', (req, res) => {
    console.log(`Received a request from: ${req.ip}`)
    res.send('Welcome to this server Express');
});

//trow an error route for testing with next(error)
app.get('/error', (req, res, next) => {
    next(new Error('This is a custom error for tests'));
});

//ignore the favicon requests from the browser
app.get('/favicon.ico', (_req, res) => {
    res.status(204).end();
});

//intercept crashes
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error'});
});

//global error gestore(using req to found errors)
app.use((err, req, res, next) => {
    console.error(`[ERROR] on ${req.method} ${req.originalUrl}:`, err.message);
    res.status(500).json({ error: err.message});
});


//have to be the last thing of the file to catch undefined routes
//4.start listening server
app.listen(PORT, () => {
    console.group("main");
    console.log(`Server Express running on http://localhost:${PORT}`);
    console.groupEnd();
    console.group(`Error`);
    console.log(`Server Express Error CHeck on http://localhost:${PORT}/error`);
    console.groupEnd();
});
