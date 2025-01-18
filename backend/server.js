const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const uri = "mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority&appName=UTEK-FireRescue";

// Create one MongoClient instance for the app
const client = new MongoClient(uri);
let db;

async function startServer() {
    try {
        // 1) Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        // 2) Select the database (name it whatever you like)
        db = client.db("fireRescueDB");

        // 3) Create an Express app
        const app = express();
        // Parse JSON bodies for POST requests
        app.use(express.json());

        // 4) Serve your front-end (if you put index.html in a 'public' folder)
        // app.use(express.static(path.join(__dirname, 'public')));

        // 5) Define API endpoints

        // GET all safe havens
        app.get('/api/safe-havens', async (req, res) => {
            try {
                const safeHavensColl = db.collection('safeHavens');
                const havens = await safeHavensColl.find({}).toArray();
                return res.json(havens);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to get safe havens' });
            }
        });

        // POST a new safe haven
        app.post('/api/safe-havens', async (req, res) => {
            try {
                const { name, coords } = req.body;
                if (!coords || coords.length !== 2) {
                    return res.status(400).json({ error: 'Invalid coords' });
                }

                const safeHavensColl = db.collection('safeHavens');
                const result = await safeHavensColl.insertOne({
                    name: name || 'Unnamed Haven',
                    coords,        // e.g. [-79.36, 43.65]
                    createdAt: new Date()
                });
                return res.status(201).json({ insertedId: result.insertedId });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to create safe haven' });
            }
        });

        // GET all fire pins
        app.get('/api/fires', async (req, res) => {
            try {
                const firesColl = db.collection('fires');
                const fires = await firesColl.find({}).toArray();
                return res.json(fires);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to get fires' });
            }
        });

        // POST a new fire pin
        app.post('/api/fires', async (req, res) => {
            try {
                const { coords } = req.body;
                if (!coords || coords.length !== 2) {
                    return res.status(400).json({ error: 'Invalid coords' });
                }

                const firesColl = db.collection('fires');
                const result = await firesColl.insertOne({
                    coords,       // e.g. [-79.40, 43.66]
                    createdAt: new Date()
                });
                return res.status(201).json({ insertedId: result.insertedId });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to create fire pin' });
            }
        });

        // 6) Start listening
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

startServer();
