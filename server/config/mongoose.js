var mongoose = require("mongoose");
var fs = require("fs");
var models_path = __dirname + "/../models";

//connecting to my database
mongoose.connect("mongodb://localhost/warningSigns");

//my db will have two collections
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") >=0){
		require(models_path + "/" + file);
	};
});
