import express from "express"
import GamesRouter from "./routes/games.route.js"
import ConsoleRouter from "./routes/consoles.route.js"
import MongoConnection from "./models/MongoConnection.js"


const PORT = 8080
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/", new GamesRouter().start())
app.use("/", new ConsoleRouter().start())

await MongoConnection.connect()

app.listen(PORT, ()=> console.log(`Se levanta servidor exitosamente en puerto localhost:${PORT}`))
app.on("Error", (error) => console.log("Ocurrio el error: ", error))