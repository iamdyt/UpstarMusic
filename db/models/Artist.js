const mongoose = require('mongoose');
const url = 'mongodb://localhost/upstarmusic';
const albumSchema = require('./Album');
mongoose.connect(url,{useNewUrlParser:true})
        .then(connect => {
            console.log("Connected to Mongo");
        })
        .catch(error => {
            console.log(error);
        });
const Schema = mongoose.Schema;


//ArtistSchema

const artistSchema = new Schema({
    name: String,
    age:Number,
    yearsActive:Number,
    genre:String,
    website:String,
    netWorth:Number,
    labeName:String,
    album:[albumSchema]
});

artistSchema.virtual('numberofalbum').get(function(){
    return  this.album.length;
});

const Artist = mongoose.model('artist',artistSchema);

module.exports = Artist;