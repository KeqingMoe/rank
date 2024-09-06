import http from 'http';
import {Res,Record} from '../src/types'

// 定义要返回的JSON对象
const jsonResponse:Res = {
    problemCount: 12,
    records: [
        {
            participantId: 0,
            participantName: '刻晴',
            participantDepartment: '璃月第一大学',
            penalty: 0,
            solved: 12,
            submissions: [
                {
                    problemId: 1,
                    tries: 1,
                    time: 1,
                    status: 'Accepted',
                },
                {
                    problemId: 2,
                    tries: 1,
                    time: 2,
                    status: 'Accepted',
                },
                {
                    problemId: 3,
                    tries: 1,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 4,
                    tries: 2,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 5,
                    tries: 1,
                    time: 1,
                    status: 'Accepted',
                },
                {
                    problemId: 6,
                    tries: 1,
                    time: 2,
                    status: 'Accepted',
                },
                {
                    problemId: 7,
                    tries: 1,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 8,
                    tries: 2,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 9,
                    tries: 1,
                    time: 1,
                    status: 'Accepted',
                },
                {
                    problemId: 10,
                    tries: 1,
                    time: 2,
                    status: 'Accepted',
                },
                {
                    problemId: 11,
                    tries: 1,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 12,
                    tries: 2,
                    time: 4,
                    status: 'Accepted',
                },
            ]
        },
        {
            participantId: 0,
            participantName: '刻晴老婆',
            participantDepartment: '璃月第二大学',
            penalty: 1,
            solved: 9,
            submissions: [
                {
                    problemId: 1,
                    tries: 1,
                    time: 2,
                    status: 'Accepted',
                },
                {
                    problemId: 2,
                    tries: 0,
                    time: 3,
                    status: 'Rejected',
                },
                {
                    problemId: 2,
                    tries: 2,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 4,
                    tries: 3,
                    time: 5,
                    status: 'Rejected',
                },
                {
                    problemId: 5,
                    tries: 1,
                    time: 2,
                    status: 'Accepted',
                },
                {
                    problemId: 6,
                    tries: 2,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 7,
                    tries: 2,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 8,
                    tries: 3,
                    time: 5,
                    status: 'Rejected',
                },
                {
                    problemId: 9,
                    tries: 1,
                    time: 2,
                    status: 'Accepted',
                },
                {
                    problemId: 10,
                    tries: 2,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 11,
                    tries: 2,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 12,
                    tries: 3,
                    time: 5,
                    status: 'Rejected',
                },
            ]
        },
        {
            participantId: 0,
            participantName: '刻晴マイワイフ',
            participantDepartment: '璃月第三大学',
            penalty: 2,
            solved: 6,
            submissions: [
                {
                    problemId: 1,
                    tries: 2,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 2,
                    tries: 3,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 3,
                    tries: 4,
                    time: 5,
                    status: 'Rejected',
                },
                {
                    problemId: 4,
                    tries: 5,
                    time: 6,
                    status: 'Rejected',
                },
                {
                    problemId: 5,
                    tries: 2,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 6,
                    tries: 3,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 7,
                    tries: 4,
                    time: 5,
                    status: 'Rejected',
                },
                {
                    problemId: 8,
                    tries: 5,
                    time: 6,
                    status: 'Rejected',
                },
                {
                    problemId: 9,
                    tries: 2,
                    time: 3,
                    status: 'Accepted',
                },
                {
                    problemId: 10,
                    tries: 3,
                    time: 4,
                    status: 'Accepted',
                },
                {
                    problemId: 11,
                    tries: 4,
                    time: 5,
                    status: 'Rejected',
                },
                {
                    problemId: 12,
                    tries: 5,
                    time: 6,
                    status: 'Rejected',
                },
            ]
        },
    ]
};

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置允许的HTTP方法
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // 设置预检请求的有效期
    res.setHeader('Access-Control-Max-Age', '3600');
    // 设置允许的头部信息
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    res.end(JSON.stringify(jsonResponse));
});

const port = 1145;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
