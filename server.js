const express = require('express')
const app = express();
// const { getPost } = require('./app/routes/post')
const postRoutes = require('./app/routes/post')
const morgan = require('morgan');

const myOwnMiddleware = (req, res, next) => {
    console.log("middleware applied!!");
    next();
};
// middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);

// bringin routes
// app.get("/", morgan("dev"), getPost);
// app.get("/", myOwnMiddleware, getPost);
app.get("/", postRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`A node is api is listening on port: ${port}`);
});