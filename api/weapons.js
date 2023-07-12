const allowCors = (fn) => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://rainbow-horse-a069c1.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, hx-current-url, hx-request, hx-target'
    );
  
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    if (req.method === 'GET') {
      res.json([
        { name: 'Blaster', description: 'A simple blaser pistol', damage: '3', img: 'blaser.png' },
        { name: 'Laser', description: 'A simple laser pistol', damage: '5', img: 'laser.png' },
        { name: 'Missle', description: 'A straight-shot missle', damage: '8', img: 'missle.png' },
        { name: 'Homing Missle', description: 'A heat-seaking missle', damage: '9', img: 'hmissle.png' },
        { name: 'BGF', description: 'A rather large device', damage: '25', img: 'bgf.png' },
      ]);
      return;
    }
  
    return await fn(req, res);
  };
  
  const handler = (req, res) => {
    const d = new Date();
    res.end(d.toString());
  };
  
  module.exports = allowCors(handler);
  