'use strict';

const superagent = require 'superagent';

/** This function ...
 * @paraam {} -
 * @returns {} -
 */



 const fetchNewsFeed = () => {
  //  const data = {
  //    news_api: process.env.NEWS_API
  //   };
   const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`
   return superagent.get(url)
   .then(response =>{
     response.body
   }
   )};

   const headlines ()


 
 
 // var url = 'https://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=61cee7dac1bd442ea66e0a9a44b8e777';
// var req = new Request(url);
// fetch(req)
// .then(function(response) {
// console.log(response.json());
// })


module.exports = {fetchNewsFeed};