module.exports = (req, res) => {
    if (req.method === 'GET'){
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.setHeader('content-type', 'application/json; charset=utf-8')
        res.json([
            {name: "Eric", location: "Sacramento, CA"},
            {name: "Dakota", location: "Sacramento, CA"},
            {name: "Amy", location: "Far Away"}
        ])
    } else {

    }
}