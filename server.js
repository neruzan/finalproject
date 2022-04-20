const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json());
const newsRoute = require("./routes/newsRoute");
const userRoute = require("./routes/userRoute");
const port = 4000;

app.use("/api/newsitems/", newsRoute);
app.use("/api/users/", userRoute);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
