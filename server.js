var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
    title: "Article-1 shashwat",
    heading: "Article one",
    date: "Sep 24 2016",
    content: `<p>
                This is th content for my first article
                This is th content for my first article
                This is th content for my first article
            </p>
            <p>
                This is th content for my first article
                This is th content for my first article
                This is th content for my first article
            </p>`
    
},
 'article-two':{
     title: "Article-2 shashwat",
    heading :"Article TWO",
    date: "Sep 24 2016",
    content: `<p>
                This is th content for my SECCOND article
                This is th content for my SECONGt article
                This is th content for my first article
            </p>
            <p>
                This is th content for my first article
                This is th content for my first article
                This is th content for my first article
            </p>`
    
},
 'article-three':{
     title: "Article-3 shashwat",
    heading :"Article THREE",
    date: "Sep 24 2016",
    content: `<p>
                This is th content for my THIRD article
                This is th content for my THIRD article
                This is th content for my first article
            </p>
            <p>
                This is th content for my first article
                This is th content for my first article
                This is th content for my first article
            </p>`
    
}
};
function createTemplate (data){
    var title=data.title;
    var date =data.date;
    var heading =data.heading;
    var content =data.content;
    
    var htmlTemplate=`<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content ="width-device-width, initial-scale=1" >
         <link href="/ui/style.css" rel="stylesheet" />
        <style>
           
        </style>
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>    
    </div>
        
    </body>
    </html>`
    ;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
})
app.get('/:articleName', function(req, res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
