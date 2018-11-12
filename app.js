
const express = require ('express');
    path = require ('path');
    bodyParser = require ('body-parser');
    cors = require ('cors');
    mongoose = require ('mongoose');
const app = express();

let CmsPage  = require('./models/CmsPages');
app.use(cors());

mongoose.Promise =global.Promise
mongoose.connect("mongodb://root:root123@ds063779.mlab.com:63779/rkcms-app",{useNewUrlParser: true}).then(
() => {console.log('Databse is connected')},
() => {console.log('Connection not connected')}
)

CmsPage.findOne({}).then(
    (Data) => {
      if (Data == null) {
        const homeData = {
          slug: "home",
          content: "<div class=\"jumbotron\"><div class=\"container\"><h1>Hello, User!</h1><p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique. This content is being added for testing purposes.</p><p><a class=\"btn btn-primary btn-lg\" href=\"#\">Learn more &raquo;</a></p></div></div><div class=\"container\"><!-- Example row of columns --><div class=\"row\"><div class=\"col-md-4\"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p><p><a class=\"btn btn-default\" href=\"#\">View details &raquo;</a></p></div><div class=\"col-md-4\"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p><p><a class=\"btn btn-default\" href=\"#\">View details &raquo;</a></p></div><div class=\"col-md-4\"><h2>Heading</h2><p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><p><a class=\"btn btn-default\" href=\"#\">View details &raquo;</a></p></div></div><hr><footer><p>&copy; 2018 smartData, Inc.</p></footer></div>",
          title: "home"
        };
        const aboutusData = {
          slug: "aboutus",
          content: "<div class=\"container\"><!-- Jumbotron --><div class=\"jumbotron\"><h1>Marketing stuff!</h1><p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p><p><a class=\"btn btn-lg btn-success\" href=\"#\">Get started today</a></p></div><!-- Example row of columns --><div class=\"row\"><div class=\"col-lg-4\"><h2>Safari bug warning!</h2><p class=\"text-danger\">As of v9.1.2, Safari exhibits a bug in which resizing your browser horizontally causes rendering errors in the justified nav that are cleared upon refreshing.</p><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p><p><a class=\"btn btn-primary\" href=\"#\">View details &raquo;</a></p></div><div class=\"col-lg-4\"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p><p><a class=\"btn btn-primary\" href=\"#\">View details &raquo;</a></p></div><div class=\"col-lg-4\"><h2>Heading</h2><p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p><p><a class=\"btn btn-primary\" href=\"#\">View details &raquo;</a></p></div></div><!-- Site footer --><footer class=\"footer\"><p>&copy; 2016 Company, Inc.</p></footer></div>",
          title: "aboutus"
        };
        const contactusData = {
          slug: "contactus",
          content: "<div class=\"jumbotron jumbotron-sm\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-12 col-lg-12\"><h1 class=\"h1\"><u><span style=\"font-size: 48px;\">Contact us</span></u><span style=\"font-size: 48px;\">&nbsp;</span><small><u><span style=\"font-size: 48px;\">Feel free to contact us</span></u></small></h1></div></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-md-8\"><div class=\"well well-sm\"><form><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"name\">&nbsp;Name</label><input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" required=\"required\" value=\"\"></div><div class=\"form-group\"><label for=\"email\">&nbsp;Email Address</label><div class=\"input-group\"><span class=\"input-group-addon\">&nbsp;</span><input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" required=\"required\" value=\"\"></div></div><div class=\"form-group\"><label for=\"subject\">&nbsp;Subject</label> <select class=\"form-control\" id=\"subject\" name=\"subject\" required=\"required\">&nbsp;&nbsp;<option selected=\"\" value=\"na\">Choose One:</option> <option value=\"service\">General Customer Service</option> <option value=\"suggestions\">Suggestions</option> <option value=\"product\">Product Support</option>&nbsp;</select></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"name\">&nbsp;Message</label> <textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\" placeholder=\"Message\" value=\"\"></textarea></div></div><div class=\"col-md-12\"><button class=\"btn btn-primary pull-right\" id=\"btnContactUs\" type=\"submit\">&nbsp;Send Message</button></div></div></form></div></div><div class=\"col-md-4\"><form><legend>&nbsp;Our office</legend><address><strong>smartData, Inc.</strong><br>2nd Jyoti Palace, Sahastradhara Rd,<br>Dehradun, Uttarakhand.<br>248001</address><address><strong>Full Name</strong><br><a href=\"mailto:#\">first.last@smartdatainc.com</a></address></form></div></div></div>",
          title: "contactus"
        };
        CmsPage.create(homeData, aboutusData, contactusData).then(data => {
          if (data) {
            console.log("App start for first time");
          } else {
            console.log('Saving process error');
          }
        });
  
      } else {
        console.log('app working fine');
      }
    },
  );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cmsPageRoutes = require('./routes/cmspage.route');
app.use('/api', cmsPageRoutes);

const port = process.env.PORT || 4000;


const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
   });