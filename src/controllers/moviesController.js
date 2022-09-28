const db=require('../database/models')

module.exports = {
    //LIST ALL MOVIES
    list : (req,res) => {
        db.Movie.findAll()
            .then((movies)=>{
                return res.render('moviesList',{movies})
            })
            .catch(error => console.log(error))
    },
    //NEWEST MOVIES
    new : (req,res) => {
        db.Movie.findAll({
            order:[
                ["release_date","DESC"]
            ]
        })
            .then((movies)=>{
                return res.render("newestMovies",{movies})
            })
    },

    //RECOMMENDED MOVIES
    recommended : (req,res) => {
        db.Movie.findAll({
            order:[
                ["release_date", "DESC"]
            ],
            limit: 5
        }
        )
            .then((movies)=>{
                return res.render("recommendedMovies", {movies})
            })
    },

    //DETAIL OF MOVIES
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
        .then(movie=> res.render('moviesDetail',{movie}))
        .catch(error => console.log(error))
    },

    //LOAD NEW MOVIE
    add: (req,res)=>{

    },
    create: (req,res)=>{
        
    },

    //EDIT MOVIE
    edit: (req,res)=>{
        
    },
    update: (req,res)=>{
        
    },

    //DELETE MOVIE
    delete: (req,res)=>{
        
    },
    destroy: (req,res)=>{
        
    }
}