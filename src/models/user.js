const path = require('path')
const fs = require('fs')

const model = {
    dir: path.resolve(__dirname, "../data", "users.json"),

    allUsers: function(){
        return JSON.parse(fs.readFileSync(this.dir))
    },
    
}

module.exports = model