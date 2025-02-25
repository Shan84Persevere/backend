const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

//Middleware

app.use(express.json());
app.use(cors());

const Schema = mongoose.Schema;
const ToDoSchema = new Schema(
    { todo: String, created: Number }
)






//Routes
//Create Get
app.get("/getTodos", (req, res) => {
    console.log("Get ToDos HIT")
    ToDo.find()
    .then(found => {
        console.log("found", found)
        res.json(found);
    })
    .catch(err => {
        console.log(err)
    })
});

//Create Post
app.post("/create", (req, res) => {
    console.log("Create Route HIT")
    ToDo.create(req.body)
    .then(created => {
        console.log("created", created)
        res.json(created)
    })
    .catch(err => {
        console.log(err)
    })
});

//Create Put
app.put("/edit/:id", (req, res) => {
    console.log("Edit Route HIT", req.body, req.params)
    ToDo.findById(req.params.id)
    .then(found => {
        console.log("found", found)
        found.todo = req.body.todo
        found.save()
    })
    .then(updated => {
        console.log("updated", updated)
        res.json(updated)
    })
    .catch(err => {
        console.log(err)
    })
});

//Create Delete

app.delete("/delete/:id", (req, res) => {
    console.log("Delete Route HIT")
    ToDo.findByIdAndDelete(req.params.id)
    .then(deleted => {
        console.log("deleted", deleted)
        res.json(deleted)
    })
    .catch(err => {
        console.log(err)
    })
});

//Create Test
app.get("/test", (req, res) => {
    console.log("TEST HIT")
    res.json({ msg: "Responding to your request" })
})
//Start Server

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//MongoDB Connection

const uri = mongoose.connect(process.env.MONGO_URI);

uri.then(() => {
    console.log("Connected to Database")
}) .catch((err) => {
    console.log(err, "Error connecting to MongoDB")
})

const ToDo = mongoose.model("ToDo", ToDoSchema);