var express = require('express')
var db = require('./db.js');
const { response } = require('express');
var port = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname, 'main.html'));
})

app.get('/:adminType', function(req, res)
{
    const adminType = req.params.adminType;
        db.getLinks(adminType, function(err, linkInfo){
            if(err)
                console.log(err);
            else
            {
                let links = {
                    type: adminType,
                    links: linkInfo
                }
                res.render('portal', { linkInfo: links });
            }
        });
});


app.listen(port, () => console.log(`App listening on port ${port}!`));
