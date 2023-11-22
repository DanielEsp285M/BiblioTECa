import app from "./app.js";
//import {PORT} from "./config.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('Server running', PORT);
