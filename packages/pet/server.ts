import app from "./app";
const Logger = require('agb-logger');
Logger.info('Starting PET service @ 8001')
app.listen(8001);