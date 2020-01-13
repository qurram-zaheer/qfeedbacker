const mongoose = require("mongoose");
const RecipientSchema = require("./Recipients");
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date,
  _user: { type: Schema.Types.ObjectId, ref: "Users" }
});

mongoose.model("Survey", surveySchema);
