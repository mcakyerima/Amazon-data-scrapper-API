const express = require('express');
const request = require('request-promise');

const app = express();



// dynamic base URL for API requests
const generateUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;


// connectint to port
const PORT = process.env.PORT || 5000;

// allow app to parse json input
app.use(express.json());

// default route
app.get('/' , (req, res) => {
    res.send('welcome to Amazon scrapper API');

} );

// fetching product deta🇮🇲 
app.get('/products/:productId', async (req , res) => { 
    // dynamically get request parameters
    const { productId } = req.params;
    const { api_key } = rep.query
 
    try {
        const response = await request(`${generateUrl(api_key)}&url=http://amazon.com/dp/${productId}`);

        // send back response
        res.json(JSON.parse(response));

    } catch (error) {
        res.json(error);
    }  
});

// fetching product reviews
    // dynamically get request parameters
app.get('/products/:productId/reviews', async (req , res) => {
    const { productId } = req.params;
    const { api_key } = req.query
 
    try {
        const response = await request(`${generateUrl(api_key)}&url=http://amazon.com/product-reviews/${productId}`);

        // send back response
        res.json(JSON.parse(response));
        
    } catch (error) {
        res.json(error);
    }  

})

// checking product offers
app.get('/products/:productId/offers', async (req , res) => {
    const { productId } = req.params;
    const { api_key } = req.query
 
    try {
        const response = await request(`${generateUrl(api_key)}&url=http://amazon.com/gp/offer-listing/${productId}`);

        // send back response
        res.json(JSON.parse(response));
        
    } catch (error) {
        res.json(error);
    }  

})

// search query
app.get('/search/:searchQuery', async (req , res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query
 
    try {
        const response = await request(`${generateUrl(api_key)}&url=http://amazon.com/s?k=${searchQuery}`);

        // send back response
        res.json(JSON.parse(response));
        
    } catch (error) {
        res.json(error);
    }  

})
  
// make app listen to specific PORT 
app.listen(PORT , () => console.log(`server running on port ${PORT}`));
