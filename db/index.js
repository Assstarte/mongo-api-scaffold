const mongoose = require("mongoose");
const log = require("../utils/logger");

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

//=========Configuring Events=======//
db.on("error", (err) => {
    lgr.red(err);
});

db.once("open", () => {
    log.green("[DB > ] Successfully established MongoDB connection");
});
//=================================//

module.exports = db;
