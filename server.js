// 
//    fix this file
// 

const express = require('express');
const expressHandlebars = require("express-handlebars");

const PORT = process.env.PORT || 3001;
const app = express();

const routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

connection.connect(err => {
    if (err) {
        throw new Error(err)
    }
    app.listen(PORT, () => {
        console.log(`API server now on port ${PORT}!`);
    });
});
