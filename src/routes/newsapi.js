'use strict';

const superagent = require ('superagent');

/** This function ...
 * @param {} -
 * @returns {} -
 */

// class Headlines {
//   constructor(){
//     this.source = req.body
//   }
// }

async function fetchHeadlines (request, response) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`;
  
  const newsData = await superagent.get(url);
  console.log(newsData);
  response.send(newsData);
}


async function fetchSearch (request, response) {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API}`;
  
  const newsData = await superagent.get(url);
  console.log(newsData);
  response.send(newsData);
}

// maybe use a dropdown of sources ids on the front end
async function fetchSources (request, response) {
  const url = `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API}`;
  
  const newsData = await superagent.get(url);
  console.log(newsData);
  response.send(newsData);
}

// const fetchNewsFeed = () => {
//   //  const data = {
//   //    news_api: process.env.NEWS_API
//   //   };
//   // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`;
//   let newsArray = [];
//   return superagent.get(url)
    
//     .then(response =>{
//       newsArray.push(response.body);
//       return newsArray;
//     })
//     .catch(error => console.error('error', error));
// };


 
 
// var url = 'https://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=61cee7dac1bd442ea66e0a9a44b8e777';
// var req = new Request(url);
// fetch(req)
// .then(function(response) {
// console.log(response.json());
// })


module.exports = fetchHeadlines;
module.exports = fetchSearch;
module.exports = fetchSources;