module.exports = (req, res) => {
    if (req.method === 'GET'){
        res.json([
            {name: "Eric", location: "Sacramento, CA"},
            {name: "Dakota", location: "Sacramento, CA"},
            {name: "Amy", location: "Far Away"}
        ])
    } else {

    }
}