require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const srv = express();
const db = require("./db");

//================|Configuring Express|================
srv.set('trust proxy', 1) // Trust first proxy (for NGINX in prod)
srv.use(bodyParser.json());
//=====================================================

//==================|Mounting Routes|==================
const SubscribersRouter = require("./routes/subscribers");
// const SecuredRoutes = require(`${__dirname}/routes/securedApi`);
srv.use('/subscribers', SubscribersRouter); //Mount
// srv.use('/secured', SecuredRoutes);
//=====================================================

const SRV_PORT = process.env.SRV_PORT || 3030;

srv.listen(SRV_PORT, () => {
  console.warn(`Server is working on ${SRV_PORT} port...`);
});
