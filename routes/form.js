const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

//const serviceAccount = require('../serviceAccountKey.json');
require('dotenv').config();

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    clientId: process.env.FIREBASE_CLIENT_ID,
    clientCertUrl: process.env.FIREBASE_CLIENT_CERT_URL
  })
});
const db = admin.firestore();

router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await db.collection('submissions').add({ name, email, message });
    res.send('Submission successful');
  } catch (error) {
    console.error('Error writing document: ', error);
    res.status(500).send('Error saving submission');
  }
});

module.exports = router;
