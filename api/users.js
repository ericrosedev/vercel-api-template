module.exports = (req, res) => {
    if (req.method === 'GET'){
        res.json([
            {name: "Eric", location: "Sacramento, CA"},
            {name: "Dakota", location: "Sacramento, CA"},
            {name: "Amy", location: "Far Away"},
            {name: "Kevin", location: "Folsom, CA"},
            {name: "Melinda", location: "Folsom, CA"}
        ])
    } else {

    }
}