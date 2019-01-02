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

app.listen(3000, function(){
    console.log(`server has started`)
})