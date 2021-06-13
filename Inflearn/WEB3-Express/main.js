const express = require("express");
const fs = require("fs");
const template = require("./lib/template.js");
const path = require("path");
const sanitizeHtml = require("sanitize-html");
const bodyParser = require("body-parser");
const compression = require("compression");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
// custom middleware
app.get("*", (req, res, next) => {
    fs.readdir("./data", (error, filelist) => {
        req.list = filelist;
        next();
    });
});

app.get("/", (req, res) => {
    const title = "Welcome";
    const description = "Hello, Node.js";
    const list = template.list(req.list);
    const html = template.HTML(
        title,
        list,
        `<h2>${title}</h2>${description}<img src="/images/hello.jpg" style="width:500px; display:block; margin:10px"></img>`,
        `<a href="/create">create</a>`
    );
    res.send(html);
});

app.get("/page/:id", (req, res) => {
    const title = req.params.id;
    const description = req.params.id;
    const sanitizedTitle = sanitizeHtml(title);
    const sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ["h1"],
    });
    const list = template.list(req.list);
    const html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
                    <a href="/update/${sanitizedTitle}">update</a>
                    <form action="/delete" method="post">
                      <input type="hidden" name="id" value="${sanitizedTitle}">
                      <input type="submit" value="delete">
                    </form>`
    );
    res.send(html);
});

app.get("/create", (req, res) => {
    const title = "WEB - create";
    const list = template.list(req.list);
    const html = template.HTML(
        title,
        list,
        `
              <form action="/create" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                  <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
            `,
        ""
    );
    res.send(html);
});

app.post("/create", (req, res) => {
    const post = req.body;
    const title = post.title;
    const description = post.description;
    fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        res.writeHead(302, { Location: `/?id=${title}` });
        res.end();
    });
});

app.get("/update/:id", (req, res) => {
    var filteredId = path.parse(req.params.id).base;
    fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
        var title = req.params.id;
        var list = template.list(req.list);
        var html = template.HTML(
            title,
            list,
            `
            <form action="/update" method="post">
              <input type="hidden" name="id" value="${title}">
              <p><input type="text" name="title" placeholder="title" value="${title}"></p>
              <p>
                <textarea name="description" placeholder="description">${description}</textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
            `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        res.send(html);
    });
});

app.post("/update", (req, res) => {
    const post = req.body;
    const id = post.id;
    const title = post.title;
    const description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, function (error) {
        fs.writeFile(`data/${title}`, description, "utf8", function (err) {
            res.redirect(`/page/${title}`);
        });
    });
});

app.post("/delete", (req, res) => {
    const post = req.body;
    const id = post.id;
    const filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, function (error) {
        res.redirect("/");
    });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
