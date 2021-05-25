const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");

const templateHTML = (title, list, body) => {
    return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
};

const templateList = (files) => {
    let list = "<ul>";
    let i = 0;
    while (i < files.length) {
        list += `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`;
        i += 1;
    }
    list += "</ul>";
    return list;
};

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if (pathname === "/") {
        if (queryData.id === undefined) {
            fs.readdir("./data", (err, files) => {
                const title = "Welcome";
                const description = "Hello, Node.js";
                const list = templateList(files);
                const template = templateHTML(
                    title,
                    list,
                    `<h2>${title}</h2>${description}`
                );
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readdir("./data", (err, files) => {
                fs.readFile(
                    `data/${queryData.id}`,
                    "utf8",
                    (err, description) => {
                        const title = queryData.id;
                        const list = templateList(files);
                        const template = templateHTML(
                            title,
                            list,
                            `<h2>${title}</h2>${description}`
                        );
                        response.writeHead(200);
                        response.end(template);
                    }
                );
            });
        }
    } else if (pathname === "/create") {
        fs.readdir("./data", (err, files) => {
            const title = "WEB - create";
            const list = templateList(files);
            const template = templateHTML(
                title,
                list,
                `<form action="http://localhost:3000/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                <input type="submit">
                </p>
                </form>`
            );
            response.writeHead(200);
            response.end(template);
        });
    } else if (pathname === "/create_process") {
        let body = "";
        request.on("data", (data) => {
            body += data;
        });
        request.on("end", () => {
            const post = qs.parse(body);
            const title = post.title;
            const description = post.description;
        });
    } else {
        response.writeHead(404);
        response.end("Not Found");
    }
});

app.listen(3000);
