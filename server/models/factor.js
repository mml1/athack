var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FactorSchema = new mongoose.Schema({
	// name:String, 
	// created_at: {type: Date, default: new Date},
	// // orders: [{type: Schema.Types.ObjectId, ref: "Order"}]
});
mongoose.model("Factor", FactorSchema);