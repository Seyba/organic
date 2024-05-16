const express = require('express')
const app = express()

const PORT = process.env.PORT || 3004
app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(PORT, function() {
  console.log(`Express app running on port ${PORT}`)
});