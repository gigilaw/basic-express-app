let express = require(`express`)
let app = express()

// `/` => "Hi there"
app.get(`/`, function(req, res){
    res.send(`Hi there`)
});
// `/bye` => "Goodbye"
app.get(`/bye`, function(req, res){
    res.send(`Goodbye`)
})
// '/dog` => "meowww"
app.get(`/dog`, function(req, res){
    res.send(`meowww`)
})

//create dynamic subreddit
app.get(`/r/:subredditName`, function(req, res){
    var subReddit = req.params.subredditName
    res.send(`Welcome to ${subReddit} subReddit!`)
})

//non-existent route 
app.get(`*`, function(req, res){
    res.send(`this route doesn't exist!`)
})

app.listen(3000, function(){
    console.log(`server has started`)
})

