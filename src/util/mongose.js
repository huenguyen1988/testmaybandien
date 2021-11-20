module.exports = {
    multiMTO: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    singleMTO: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}



