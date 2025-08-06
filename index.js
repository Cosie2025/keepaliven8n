const cron = require('node-cron');
const axios = require('axios');

const targetURL = 'https://n8n-xbs5.onrender.com'; // replace with your n8n URL

// Run every 5 minutes
cron.schedule('*/5 * * * *', async () => {
  try {
    const res = await axios.get(targetURL);
    console.log(`[${new Date().toISOString()}] Pinged n8n: ${res.status}`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error pinging n8n:`, error.message);
  }
});

// Keep server alive
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Cron job is running...'));
app.listen(3000, () => console.log('App started on port 3000'));
