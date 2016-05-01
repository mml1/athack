var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
    text: String,
    risk_score: Number,
    keyword: String,
    category: String,
    created_at: {type: Date, default: new Date}
});
mongoose.model("Question", QuestionSchema);