const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SM1AXJgQ#jwG5514NLFYmXIRyrRtGG4FwPs27CiUkh62IlQFBIMY",
MONGODB: process.env.MONGODB || "mongodb://mongo:GoAcDbePrmPNKPlSpKkGrraMHJQVHpcZ@autorack.proxy.rlwy.net:15164",
};
