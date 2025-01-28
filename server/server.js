const  express = require("express")
require('dotenv').config()
const morgan = require("morgan");
const app = express();

//app.use(express.json());


app.get("/api/v1/restaurants", (req, res) =>{
    console.log("route handler");
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds","arbies"],
        },

    });
});

app.get("/api/v1/restaurants/:id", (req, res) =>{
console.log(req.params); 
res.status(200).json({
    status: "success",
    data: {
        restaurant: ["mcdonalds"],
    },

});
});

app.post("/api/v1/restaurants", (req, res) =>{
console.log(req.body);
res.status(201).json({
    status: "success",
    data: {
        restaurant: ["mcdonalds","arbies"],
    },

});
});

app.put("/api/v1/restaurants/:id", (req, res) =>{
    console.log("put");
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds","arbies"],
        },

    });
    });

app.delete("/api/v1/restaurants/:id", (req, res) =>{
    console.log("delete");
    res.status(204).json({
        status: "success",

    });
    });
  
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listenin on port ${port}`);
} );



