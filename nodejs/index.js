// 引用http模块
const http = require("http");
const template = require('art-template');

const hostname = '127.0.0.1';
const port = 3000;

var visitCount = 0;

// 创建服务端 监听2014端口
const server = http.createServer(function (request, response) {
    // 输出网页头信息，200状态
    response.writeHead(200, {
        // 网页MIME类型
        "content-type": "text/html"
    });

    let html = template(process.cwd() + '/tpl-user.html', {
        user: {
            name: 'aui',
            profile: {
                age: 666
            }
        }
    });

    response.write(html);

    console.log("new one => count: " + visitCount++);

    // 结束输出
    response.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});