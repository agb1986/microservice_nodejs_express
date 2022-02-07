import app from './app';
const Logger = require('agb-logger');
Logger.info('Starting USER service @ 8003')
app.listen(8003);