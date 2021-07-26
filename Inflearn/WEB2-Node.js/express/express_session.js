var express = require("express");
var parseurl = require("parseurl");
var session = require("express-session");
var session = require("express-session");
var FileStore = require("session-file-store")(session);

var fileStoreOptions = {};

var app = express();

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        store: new FileStore(fileStoreOptions),
    })
);

app.get("/", function (req, res, next) {
    console.log(req.session);
    req.session.num === undefined
        ? (req.session.num = 1)
        : (req.session.num += 1);
    res.send(`Views: ${req.session.num}`);
});

app.listen(3000, function () {
    console.log("3000!");
});
