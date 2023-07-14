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

    let theCount = 0;

    if (req.method === 'GET') {
        res.render(theCount);
        return;
    }

    return await fn(req, res);
};

const handler = (req, res) => {
    const d = new Date();
    res.end(d.toString());
};

module.exports = allowCors(handler);
