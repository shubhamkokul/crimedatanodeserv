const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.set('views', __dirname + '/src/views');
app.engine('html', require('ejs').renderFile);


app.use('/', routes);


app.listen(config.PORT, () => {
    console.log(`App listening at http://localhost:${config.PORT}`);
});
