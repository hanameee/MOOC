const http = require("http");
const cookie = require("cookie");

http.createServer((req, res) => {
    let cookies = {};
    if (req.headers.cookie) {
        cookies = cookie.parse(req.headers.cookie);
    }
    // res.writeHead(200, {
    //     "Set-Cookie": [
    //         "yummy_cookie=choco",
    //         "tasty_cookie=strawberry",
    //         `domain_cookie=yoyo; Domain=localhost`,
    //     ],
    // });
    console.log(cookies.yummy_cookie);
    res.end("cookie!");
}).listen(3000);
