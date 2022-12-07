const express = require('express'); // o express não é reconhecido nessa linha
const app = express();
const cors = require('cors');

require('dotenv').config();

const db = require('./config/database');
const pacienteRoutes = require('./routes/pacienteRoutes');
const medicacaoRoutes = require('./routes/medicacaoRoutes');

db.connect();

app.use(cors());
app.use(express.json())
app.use("/telsmed", pacienteRoutes);
app.use("/telsmed", medicacaoRoutes)


module.exports = app;