const allowCors = fn => async (req, res) => {

    res.setHeader('Access-Control-Allow-Credentials', true)
  
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    // another common pattern
  
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  
    res.setHeader(
  
      'Access-Control-Allow-Headers',
  
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  
    )
  
    if (req.method === 'OPTIONS') {
  
      res.status(200).end()
  
      return
  
    }

    if (req.method === 'GET'){
        res.json([
            {name: "Eric", location: "Sacramento, CA"},
            {name: "Dakota", location: "Sacramento, CA"},
            {name: "Amy", location: "Far Away"},
            {name: "Kevin", location: "Folsom, CA"},
            {name: "Melinda", location: "Folsom, CA"}
        ])
    }
  
    return await fn(req, res)
  
  }
  
  
  const handler = (req, res) => {
  
    const d = new Date()
  
    res.end(d.toString())
  
  }
  
  
  module.exports = allowCors(handler)