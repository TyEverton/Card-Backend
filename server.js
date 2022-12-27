const express = require('express')
const app = express()
const port = 3015
const router = express.Router()

app.get('/usersBackEnd', (req, res) => {
  // res.send('Hello, World!')
  res.send([
    {
      id: 1,
      username: 'River',
    },
    {
      id: 2,
      username: 'Mabel',
    },
  ])
})

app.listen(port, () => {
  console.log(`Social listening on port ${port}`)
})

module.exports = router
