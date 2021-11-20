

class DetailController {

    //GET /detail/id       

    show(req, res) {
        res.send('DETAIL VIEW SHOW')
    }
}
module.exports = new DetailController;