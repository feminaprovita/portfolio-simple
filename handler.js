// const serverless = require("serverless-http");
// const hbs = require("hbs");
// const express = require("express");


// const app = express()
// app.use(express.urlencoded({extended: false}))
// app.use(express.json())
// app.set('view engine', hbs)

// app.get('/', (req, res) => {
//   res.status(200).render('index')
// })

// module.exports.portfolio = serverless(app)





module.exports.hello = (event, context, callback) => {
  const response = { statusCode: 200, body: 'Go Serverless!' };
  callback(null, response);
};


// module.exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }, null, 2),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
