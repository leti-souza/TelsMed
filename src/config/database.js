const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco de dados TelsMed conectado")
    } catch (error) {
        console.error("Error:", error.message);
    }
}

module.exports = {
    connect
}