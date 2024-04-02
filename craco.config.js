const path  = require('path');
module.exports = {
    typescript: {
        enableTypeChecking: true,
    },
    webpack : {
           alias: {
               "#" : path.resolve(__dirname,"src/")
           }
    }


};