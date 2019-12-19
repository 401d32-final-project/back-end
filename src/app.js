'use strict';

const express = require ('express');
const cors = require('cors');
const morgan = require ('morgan');

const newsRoutes = require ('./routes/newsapi.js');



const usersRouter = require ('./routes/user.js');


const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// connects to our news router module
// app.use(fetchHeadlines);
app.use(usersRouter);


// app.get('/', (request, response) => {
//   console.log('here');
//   response.send('you have hit the slash route');
// });

app.get('/headlines', newsRoutes.fetchHeadlines);
app.get('/search', newsRoutes.fetchSearch);
app.get('/sources', newsRoutes.fetchSources);

app.get('*', () => {
  console.log('404');
});



// function handleNews(req, res){
//   fetchHeadlines(req.body.search){

//   }
// }


module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server up on port:: ${PORT}`);
    });
  },
};
