const User = require('../models/User')
const Test = require('../models/Test')
const { multiMTO } = require('../../util/mongose')

class SiteController {

    //GET /news    
    index(req, res, next) {
        Test.find({})
            .then(tests => {
                res.json(tests)
                //res.render('home', { tests: multiMTO(tests) })
            })
            .catch(next)



    }

    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController;