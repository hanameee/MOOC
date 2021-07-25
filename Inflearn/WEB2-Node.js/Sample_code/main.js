const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const path = require("path");
const template = require("./lib/template");
const sanitizeHtml = require("sanitize-html");
const cookie = require("cookie");

const EMAIL = "hanameee@gmail.com";
const PASSWORD = "1111";

const authIsOwner = (request, response) => {
    let isOwner = false;
    const cookies = request.headers.cookie
        ? cookie.parse(request.headers.cookie)
        : {};
    if (cookies.email === EMAIL && cookies.password === PASSWORD) {
        isOwner = true;
    }
    return isOwner;
};

const authStatusUI = (request, response) => {
    return authIsOwner(request, response)
        ? '<a href="/logout_process">logout</a>'
        : '<a href="/login">login</a>';
};

const checkLoggedIn = (request, response) => {
    if (authIsOwner(request, response) === false) {
        response.end("Needs Login!");
        return false;
    }
};

const app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if (pathname === "/") {
        if (queryData.id === undefined) {
            fs.readdir("./data", (err, files) => {
                const title = "Welcome";
                const description = "Hello, Node.js";
                const list = template.list(files);
                const html = template.html(
                    title,
                    list,
                    `<h2>${title}</h2>${description}`,
                    `<a href="/create">create</a>`,
                    authStatusUI(request, response)
                );
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir("./data", (err, files) => {
                fs.readFile(
                    `data/${queryData.id}`,
                    "utf8",
                    (err, description) => {
                        const title = queryData.id;
                        const sanitizedTitle = sanitizeHtml(title);
                        const sanitizedDescription = sanitizeHtml(description);
                        const list = template.list(files);
                        const html = template.html(
                            title,
                            list,
                            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
                            `<a href="/update?id=${sanitizedTitle}">update</a>
                            <a href="/create">create</a>
                            <form action="/delete_process" method="post">
                                <input type="hidden" name="id" value="${sanitizedTitle}">
                                <input type="submit" value="delete">
                            </form>`,
                            authStatusUI(request, response)
                        );
                        response.writeHead(200);
                        response.end(html);
                    }
                );
            });
        }
    } else if (pathname === "/create") {
        if (!checkLoggedIn(request, response)) return false;
        fs.readdir("./data", (err, files) => {
            const title = "WEB - create";
            const list = template.list(files);
            const html = template.html(
                title,
                list,
                `<form action="/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                <input type="submit">
                </p>
                </form>`,
                "",
                authStatusUI(request, response)
            );
            response.writeHead(200);
            response.end(html);
        });
    } else if (pathname === "/update") {
        if (!checkLoggedIn(request, response)) return false;
        fs.readdir("./data", (err, files) => {
            const filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, "utf8", (err, description) => {
                const title = queryData.id;
                const list = template.list(files);
                const html = template.html(
                    title,
                    list,
                    `<form action="/update_process" method="post">
                    <input type="hidden" name="id" value="${title}" placeholder="title">
                    <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                    <p>
                    <textarea name="description" placeholder="description">${description}</textarea>
                    </p>
                    <p>
                    <input type="submit">
                    </p>
                    </form>`,
                    "",
                    authStatusUI(request, response)
                );
                response.writeHead(200);
                response.end(html);
            });
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
            fs.writeFile(`data/${title}`, description, "utf8", (err) => {
                response.writeHead(302, { Location: `/?id=${title}` });
                response.end();
            });
        });
    } else if (pathname === "/update_process") {
        let body = "";
        request.on("data", (data) => {
            body += data;
        });
        request.on("end", () => {
            const post = qs.parse(body);
            const id = post.id;
            const filteredId = path.parse(id).base;
            const title = post.title;
            const description = post.description;
            fs.rename(`data/${filteredId}`, `data/${title}`, (err) => {
                fs.writeFile(`data/${title}`, description, "utf8", (err) => {
                    response.writeHead(302, { Location: `/?id=${title}` });
                    response.end();
                });
            });
        });
    } else if (pathname === "/delete_process") {
        if (!checkLoggedIn(request, response)) return false;
        let body = "";
        request.on("data", (data) => {
            body += data;
        });
        request.on("end", () => {
            const post = qs.parse(body);
            const id = post.id;
            const filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, (err) => {
                response.writeHead(302, { Location: `/` });
                response.end();
            });
        });
    } else if (pathname === "/login") {
        fs.readdir("./data", (err, files) => {
            const title = "Login";
            const list = template.list(files);
            const html = template.html(
                title,
                list,
                `<form action="login_process" method="post">
                <p><input type="text" name="email" placeholder="email"></p>
                <p><input type="password" name="password" placeholder="password"></p>
                <p><input type="submit"></p>
                </form>`,
                `<a href="/create">create</a>`
            );
            response.writeHead(200);
            response.end(html);
        });
    } else if (pathname === "/login_process") {
        let body = "";
        request.on("data", (data) => {
            body += data;
        });
        request.on("end", () => {
            const post = qs.parse(body);
            if (post.email === EMAIL && post.password === PASSWORD) {
                response.writeHead(302, {
                    "Set-Cookie": [
                        `email=${post.email}`,
                        `password=${post.password}`,
                        `nickname=hanameee`,
                    ],
                    Location: `/`,
                });
                response.end();
            } else {
                response.end("who?");
            }
        });
    } else if (pathname === "/logout_process") {
        let body = "";
        request.on("data", (data) => {
            body += data;
        });
        request.on("end", () => {
            response.writeHead(302, {
                "Set-Cookie": [
                    `email=; Max-Age=0`,
                    `password=; Max-Age=0`,
                    `nickname=; Max-Age=0`,
                ],
                Location: `/`,
            });
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end("Not Found");
    }
});

app.listen(3000);
