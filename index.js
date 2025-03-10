const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const githubdata = {
  course: 'JavaScript Basics',
  duration: '4 weeks',
  topics: [
    { name: 'Variables', description: 'Understanding variables and data types' },
    { name: 'Functions', description: 'Learning how to create and use functions' },
    { name: 'Loops', description: 'Mastering loops for repetitive tasks' },
    { name: 'Events', description: 'Handling events in JavaScript' }
  ],
  level: 'Beginner',
  instructor: {
    name: 'John Doe',
    experience: '10 years',
    contact: 'john.doe@example.com'
  },
  schedule: {
    startDate: '2023-11-01',
    endDate: '2023-11-29',
    sessions: [
      { date: '2023-11-01', topic: 'Introduction and Variables' },
      { date: '2023-11-08', topic: 'Functions' },
      { date: '2023-11-15', topic: 'Loops' },
      { date: '2023-11-22', topic: 'Events' },
      { date: '2023-11-29', topic: 'Final Project' }
    ]
  }
};
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
console.log("Hello World");

app.get('/youtube', (req, res) => {
  res.send(' <h2>Hello Youtube!</h2>');
});
app.get('/github', (req, res) => {
  res.json(githubdata);
});

