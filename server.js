const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 7000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        //* Serve static assets
        server.use(express.static('static'));

        server.get('/register', (req, res) => {
            app.render('/about')
        })



        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(PORT, (err) => {
            if(err) throw err;
            console.log("> Server started on port " + PORT);
        })
    })
    .catch(error => {
        console.error(error.stack);
        process.exit(1)
    })