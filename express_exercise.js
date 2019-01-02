let express = require(`express`)
let app = express()

//Visiting `/` shoud print "Hi there, wecome to my assignment!"
//Visiting `/speak/pig` should print "The pig says 'Onik'"
//Visiting `/speak/cow` should print "The cow says 'Moo'"
//Visiting `/speak/dog` should print "The dog says 'Woof Woof'"
//Visiting `/repeat/hello/3` should print "hello hello hello"
//Visiting `/repeat/hello/5` should print "hello hello hello hello hello"
//Visiting `/repeat/blah/2` should print "blah blah"
//If a user visits any other route, print: "Sorry, page not found...try something else"