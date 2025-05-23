const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./server/db'); 

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/signupForm', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/signupForm', (req, res) => {
  const { username, email, password } = req.body;
  db.run(
    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
    [username, email, password],
    function (err) {
      if (err) {
        return res.status(500).send({ error: 'שגיאה בהרשמה' });
      }
      res.send({ message: 'נרשמת בהצלחה' });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
