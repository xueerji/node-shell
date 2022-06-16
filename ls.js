const fs = require('fs');


module.exports = () => {
    fs.readdir('./', 'utf8', (err, files) => {
       console.log(files) 
       if(err) throw err
       return files.join('\n');
    })
}