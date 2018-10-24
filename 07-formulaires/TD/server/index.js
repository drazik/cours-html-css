const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/signup', (req, res) => {
  res.status(200).send(`<pre><code>${JSON.stringify(req.body, null, 2)}</code></pre>`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server listening on ' + PORT))
