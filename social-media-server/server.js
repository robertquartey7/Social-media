import { app } from "./main";

const server = app
const PORT = process.env.PORT || 4000

server.listen(PORT, ()=>{
    console.log(PORT)
})

