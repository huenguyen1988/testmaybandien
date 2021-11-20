const newsRoute = require('./news')
const detailRoute = require('./detail')
const siteRoute = require('./site')

function route(app) {

    app.use('/addtest', newsRoute)
    app.use('/detail', detailRoute)
    app.use('/', siteRoute)


}

module.exports = route;
