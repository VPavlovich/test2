let jq = require("jquery");
let str = require('./constant');
require('./less/index');
let App = function () {
    // console.log('App init')
    // console.log(str)
    jq('body').html(str);
};

let app = new App();
app.get = function() {};
