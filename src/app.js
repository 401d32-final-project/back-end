'use strict';

const express = require ('express');
const cors = require('cors');
const morgan = require ('morgan');
const fetchNewsFeed = require ('./routes/newsapi.js');


const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// connects to our news router module
app.use(fetchNewsFeed);


app.get('/', (request, response) => {
  response.send('you have hit the slash route');
});


module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server up on port:: ${PORT}`);
    });
  },
};
