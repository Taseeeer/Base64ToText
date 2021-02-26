const express = require("express");
const app = express();


app.use("/", express.static(__dirname + "/public" ));
app.listen(4444, () => {
    console.log("Server started on port localhost:4444");
});