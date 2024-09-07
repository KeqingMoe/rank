import http from 'http';
import jsonres from './jsonres';

// 定义要返回的JSON对象


const server = http.createServer((req, res) => {
    const jsonResponse={
        code: 200,
        data:jsonres,
        msg:'keqing'
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Max-Age', '3600');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    res.end(JSON.stringify(jsonResponse));
});

const port = 1145;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
