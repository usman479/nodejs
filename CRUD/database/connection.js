const mongoose = require('mongoose');

const connect = async() => {
    await mongoose.connect('mongodb://127.0.0.1:27017/checking')
        .then(() => {
            console.log("database started!");
        }).catch((err) => {
            console.log(err);
        })

    await mongoose.connection.on('error', err => {
        console.log(err);
    });

}

module.exports = connect