const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/confusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Successfully Connected to the Database .. !!');
    console.log('***********************************************');
    var newDish = Dishes({
        name: 'xyz',
        description: 'Test'
    });
    newDish.save()
    .then((dish) => {
        console.log(dish);
        Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);
        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => { console.log(err); })
})