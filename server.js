const express = require('express')
const app = express()
const port = 3015
const router = express.Router()
const admin = require('firebase-admin')
const serviceAccount = require('./config/serviceAccountKey.json')

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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'firebase-adminsdk-jbeuy@card-app-a32d0.iam.gserviceaccount.com',
})

app.listen(port, () => {
  console.log(`Social listening on port ${port}`)
})

module.exports = router
