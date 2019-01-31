const Artist = require('../db/models/Artist')
module.exports = {
    load(req,res){
        res.render('home');
    },

    sendSearch(req,res){
        const query = req.body.search;
        Artist.findOne({name:query})
            .then(user =>{
                if(user){
                    res.render('search',{user});
                }
                else{
                    res.redirect('/');
                }
                
               
            })
            .catch(error=>{
               console.log(error);
            });
    },
    showall(req,res){
        Artist.find({})
        .select({name:1,age:1,yearsActive:1,genre:1,website:1,album:1})
        .sort({name:1})
        .limit(1)
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