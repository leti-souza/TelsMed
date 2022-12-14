const express = require('express'); 
const app = express();
const cors = require('cors');

require('dotenv').config();

const db = require('./config/database');
const pacienteRoutes = require('./routes/pacienteRoutes');
const indexRoutes = require('./routes/indexRoutes');

db.connect();

app.use(cors());
app.use(express.json())
app.use("/telsmed", pacienteRoutes);
app.use("/telsmed", medicacaoRoutes)
app.use(routes);

module.exports = app;