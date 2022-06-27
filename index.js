const express = require('express');
const request = require('request-promise');

const app = express();

// connectint to port
const PORT = process.env.PORT || 5000;

// allow app to parse json input
app.use(express.json())

// default route
app.get('/' , (req, res) => {
    res.send('welcome to Amazon scrapper API')

} );

// make app listen to specific PORT 
app.listen(PORT , () => console.log(`server running on port ${PORT}`))
