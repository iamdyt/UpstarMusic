const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//AlbumSchema

const albumSchema = new Schema({
   title:String,
   date:Date,
   copiesSold:Number,
   tracks:Number
});

module.exports = albumSchema;