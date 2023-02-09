const express = require('express')
const app = express()
const port = 3015
const router = express.Router()
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
  let userData = response.data

  app.get('/usersBackEnd', (req, res) => {
    res.send(userData)
  })
})
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'firebase-adminsdk-jbeuy@card-app-a32d0.iam.gserviceaccount.com',
})

app.listen(port, () => {
  console.log(`Social listening on port ${port}`)
})

module.exports = router
