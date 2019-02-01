const Artist = require('../db/models/Artist')
module.exports = {
    load(req,res){
        res.render('home');
    },

    showall(req,res){
        Artist.find({})
        .select({name:1,age:1,yearsActive:1,genre:1,website:1,album:1})
        .sort({name:1})
        //.limit(1)
        .exec((err,artists) => {
            if(artists){
                res.render('listartist',{artists});
            }
            else{
                console.log(err);
            }
        });
    }
};