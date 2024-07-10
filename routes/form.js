const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

const serviceAccount = require('../serviceAccountKey.json');

 admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
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
