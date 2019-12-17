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

async function fetchNewsFeed (request, response) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`;
  
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


module.exports = fetchNewsFeed;