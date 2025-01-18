////////////////////////////////////////////////////////////
// server.js
////////////////////////////////////////////////////////////
const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

// 1) MongoDB Atlas connection
const uri = "mongodb+srv://rafjabbour:xaLXSLY83c4vuKTn@utek-firerescue.0o2gv.mongodb.net/?retryWrites=true&w=majority&appName=UTEK-FireRescue";
const client = new MongoClient(uri);
let db;

// 2) Start server + connect to MongoDB
async function startServer() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        // Choose a database name, e.g. "fireRescueDB"
        db = client.db("fireRescueDB");

        // 3) Create an Express app
        const app = express();
        app.use(express.json());

        // 4) Serve static frontend files from the "public" folder
        app.use(express.static(path.join(__dirname, 'public')));

        // 5) API endpoints

        // --- SAFE HAVENS ---
        // GET all safe havens
        app.get('/api/safe-havens', async (req, res) => {
            try {
                const havens = await db.collection('safeHavens').find({}).toArray();
                res.json(havens);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to get safe havens' });
            }
        });

        // POST create a new safe haven
        // Expects body { name, coords: [lng, lat] }
        app.post('/api/safe-havens', async (req, res) => {
            try {
                const { name, coords } = req.body;
                if (!coords || coords.length !== 2) {
                    return res.status(400).json({ error: 'Invalid coords array' });
                }

                const result = await db.collection('safeHavens').insertOne({
                    name: name || 'Unnamed Haven',
                    coords,
                    createdAt: new Date()
                });
                res.status(201).json({ insertedId: result.insertedId });
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to create safe haven' });
            }
        });

        // --- FIRES ---
        // GET all fire points
        app.get('/api/fires', async (req, res) => {
            try {
                const fires = await db.collection('fires').find({}).toArray();
                res.json(fires);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to get fires' });
            }
        });

        // POST create a new fire point
        // Expects body { coords: [lng, lat] }
        app.post('/api/fires', async (req, res) => {
            try {
                const { coords } = req.body;
                if (!coords || coords.length !== 2) {
                    return res.status(400).json({ error: 'Invalid coords array' });
                }

                const result = await db.collection('fires').insertOne({
                    coords,
                    createdAt: new Date()
                });
                res.status(201).json({ insertedId: result.insertedId });
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to create fire point' });
            }
        });

        // 6) Listen on a port
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect to MongoDB Atlas:", err);
    }
}

// 7) Start the server
startServer();
