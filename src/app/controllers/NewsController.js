const Test = require('../models/Test')
const { mongooseToObject } = require('../../util/mongose')

class NewsController {

    //GET /news    
    index(req, res) {
        res.render('news')
    }

    // addtest(req, res) {
    //     res.render('addtest')
    // }

    create(req, res, next) {
        res.render('addtest')
    }
    //POST
    store(req, res, next) {
        //res.json(req.body)
        const test = new Test(req.body)
        test.save()

        res.send("Đã lưu")
    }

    show(req, res) {
        res.send('News Detail')
    }
}
module.exports = new NewsController;