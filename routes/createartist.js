const Artist = require('../db/models/Artist');
module.exports = {
    load(req,res){
        res.render('createartist')
    },

    createartist(req,res){
        const {name,age,activeyears,genre,website,networth,label} = req.body;
        const {albumtitle,albumdate,copiessold,tracksnumber} = req.body;
        Artist.create({
            name,
            age,
            yearsActive:activeyears,
            genre,
            website,
            networth,
            labelName:label,
            album:[{
                title:albumtitle,
                date:albumdate,
                copiessold,
                tracks:tracksnumber
            }]

        })
        .then(artist=>{
            return res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
    }
};