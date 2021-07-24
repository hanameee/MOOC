# Node.js 이론

수업 링크: https://www.inflearn.com/course/web2-node-js

## 웹 서버로서의 Node.js

아파치, Nginx 등은 웹 브라우저의 요청을 받아 응답해주는 **웹 서버**. Node.js도 이런 웹 서버 기능을 내장하고 있기에, 웹 서버로써 사용될 수 있음.

> main.js

```javascript
var http = require("http");
var fs = require("fs");
var app = http.createServer(function (request, response) {
    var url = request.url;
    if (request.url == "/") {
        url = "/index.html";
    }
    if (request.url == "/favicon.ico") {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
```

위와 같은 파일을 실행하면 Node.js 서버가 구동되어 localhost:3000에서 띄워진 앱을 확인할 수 있다. 즉, Node.js가 웹 서버로서 기능하는 것.

위 코드에서 중요한 부분은 바로 아래 부분이다.

```javascript
response.end(fs.readFileSync(__dirname + url));
```

Node.js(+php, 장고 등)는 아파치, Nginx와는 달리 이렇게 프로그래밍적으로 클라이언트에게 응답을 동적으로 만들어줘서 보내주는 일을 할 수 있다.
