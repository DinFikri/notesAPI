const express = require('express')
const db = require('../controller/dbController')
const app = express.Router()

app.delete('/notes', (req, res) => {
    const query = req.query
    const id = query.id
    db.remove(id)
    res.send('Ok')
})

module.exports = app