module.exports.getHome = function(req,res){
    
    res.status(200).render("index.pug")
}
module.exports.getFindUs = function(req,res){
    console.log(req.path)
    
    res.status(200).render("FindUs.pug");

}