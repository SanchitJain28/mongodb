//searching for data in mongodb
//this query will return all objects with price 3500
db.items.find({price:3500})

//$gte=greater than equal to
//$lte=lower than equal to
db.items.find({price:{$gte:40000}})

//$gt=greater than
//$lt=lower than
db.items.find({price:{$gt:100000}})

//and operator
db.items.find({price:{$gt:60000}, stock:{$gt:1000}})

//or operator
db.items.find({$or:[{price:{$gt:200000}},{stock:{$gte:5100}}]})

//
db.items.find({price:{$gt:100000}},{name:1,price:1})

//
db.items.insertOne({ques:"what is 10+10",choice1:"10",choice2:"8",choice3:"6",choice4:"20"})
db.items.insertMany([{ques:"what is 10+10",choice1:"10",choice2:"8",choice3:"6",choice4:"20"},
{ques:"what is 1+1",choice1:"10",choice2:"8",choice3:"6",choice4:"20"},
{ques:"what is 10*1",choice1:"10",choice2:"8",choice3:"6",choice4:"20"},
{ques:"what is 10-4",choice1:"10",choice2:"8",choice3:"6",choice4:"20"},
{ques:"what is 4+6",choice1:"10",choice2:"8",choice3:"6",choice4:"20"}])
