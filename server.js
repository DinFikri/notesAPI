const express = require('express')
const bodyParser = require('body-parser')
const addNote = require('./routes/addNote')
const getNote = require('./routes/getNote')
const deleteNote = require('./routes/deleteNote')
const editNote = require('./routes/editNote')

const app = express()
app.use(bodyParser.json())
app.use(addNote)
app.use(getNote)
app.use(deleteNote)
app.use(editNote)

app.get('/', (req, res) => {
  response.send('hello world!')
})

app.listen(3000, () => {
  console.log(`server is listening on http://localhost:3000`);
})
