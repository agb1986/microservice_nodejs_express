import app from "./app";
const Logger = require('agb-logger');
Logger.info('Starting STORE service @ 8002')
app.listen(8002);