const Artist = require('../db/models/Artist');
module.exports = {
    loadMore(req,res){
        const id = req.params.id;
        res.render('addalbum',{id});

    },

    addMore(req,res){
        const id = req.params.id;
        const {title,date,copiesSold,tracks} = req.body;
        Artist.findById(id)
            .then((artist)=>{
                if(artist){
                    artist.album.push({title,date,copiesSold,tracks});
                    artist.save();
                    res.redirect('/showall');
                }

                else{
                    console.log('nothing');
                }
            })
            .catch((error)=>{
                console.log(error);
            });
    }



};