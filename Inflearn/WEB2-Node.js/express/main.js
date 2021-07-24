const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const compression = require("compression");
const indexRouter = require("./routes/index");
const topicRouter = require("./routes/topic");
const helmet = requre("helmet");

const app = express();

app.use(helmet());
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

app.use("/", indexRouter);
app.use("/topic", topicRouter);

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

// 4개의 인수를 갖는 오류 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something is broke!");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
