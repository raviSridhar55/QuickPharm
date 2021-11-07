import express from 'express';
const app = express();
import user from '../routes/users/users.js';
import connectDB from '../config/db.js';

connectDB();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/users', user);

app.listen(5000, () => console.log('app is running on port 5000'));
