const app = require('./src/app')
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Bem-vindos ao TelsMed - Minha Farmácia!`))