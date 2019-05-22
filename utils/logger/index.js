const c = require('ansi-colors');

class Logger {
    red(str){
        console.log(c.red(str));
    }

    green(str){
        console.log(c.green(str));
    }

    cyan(str){
        console.log(c.cyan(str));
    }

    yellow(str){
        console.log(c.yellow(str));
    }

    headline(str){
        console.error.log(c.magentaBright(str));
    }

}

module.exports = new Logger();