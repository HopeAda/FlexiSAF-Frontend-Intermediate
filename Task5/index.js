const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
   res.send("Hello!")
});

app.get('/api/status', (req, res) =>{
   res.json({status: 'ok', time: new Date().toISOString()})
});


app.listen(PORT, ()=>{
   console.log(`Server listening on http://localhost:${PORT}`)
})