let jq = require("jquery");
let str = require('./constant')
let App = function () {
    // console.log('App init')
    // console.log(str)
    jq('body').html(str);
};

let app = new App();
app.get = function() {};
