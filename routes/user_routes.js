var express = require('express');
var router = express.Router();
var url = require('url');
var exe = require('./../conn');


function checklogin(req, res, next) 
{
    if(req.session.user_id != undefined)
        next();
    else 
        res.send("<script> alert('Invalid Login');location.href='/login';</script>")        
}


// CREATE TABLE user_tbl(user_id INT PRIMARY KEY AUTO_INCREMENT,user_name VARCHAR(200),mobile_number VARCHAR(200),user_email VARCHAR(200),password VARCHAR(200));

router.get('/',async function(req, res)
{
    var company_info = await exe(`SELECT * FROM company_info`);
    var home1_list = await exe(`SELECT * FROM home1`);
    var home2_bg = await exe(`SELECT * FROM home2_bg`);
    var about1 = await exe(`SELECT * FROM about1`);
    var about2 = await exe(`SELECT * FROM about2`);
    var about3 = await exe(`SELECT * FROM about3`);
    var reviews_list = await exe(`SELECT * FROM reviews`);
    var mess_service_data = await exe (`SELECT  * from mess_service`);
    var menu_meal_lunch = await exe(`SELECT * from mess_lunch,user_admin_kyc_complated where user_admin_kyc_complated.user_admin_kyc_id = mess_lunch.user_admin_kyc_id;`);

    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
        "about1":about1,
        "about2":about2,
        "about3":about3,
        "home1_list":home1_list,
        "home2_bg":home2_bg[0],
        "company_info":company_info[0],
        "reviews_list":reviews_list,
        "mess_service_data":mess_service_data,
        "menu_meal_lunch":menu_meal_lunch,
    }
    res.render("user/home.ejs",obj);
});


router.get('/login',function(req, res){
    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
    }
    res.render("user/login.ejs",obj)
});

router.get('/signup',function(req, res){
    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
    }
    res.render("user/signup.ejs",obj);
});



router.post('/do_register',async function(req, res){
    var d = req.body;
    var sql =  `INSERT INTO user_tbl (user_name,mobile_number,user_email,password) 
    VALUES ('${d.user_name}', '${d.mobile_number}', '${d.user_email}', '${d.password}')`;
    var data = await exe(sql);
    res.redirect("/login")
});


router.post('/do_login',async function(req, res)
{
    var d = req.body;
    var sql = `SELECT * FROM user_tbl WHERE mobile_number = '${d.mobile_number}' 
    AND password = '${d.password}'`;
    var data = await exe(sql);
    if(data.length > 0)
    {
        req.session.user_id = data[0].user_id;
        // req.session.mobile_number = data[0].mobile_number;
        // req.session.password = data[0].password;
        res.redirect('/');
    }
    else 
    {
        res.send("<script> alert('Invalid Details'); history.back();</script>")
    }
});

router.get("/profile",async function(req,res)
{
    var user_id = req.session.user_id;
    if(user_id)
    {
        var user_info = await exe(`SELECT * FROM  user_tbl WHERE user_id ='${user_id}'`);
        obj = {       
            "is_login":((req.session.user_id) ? true:false), 
            "user_info":user_info[0],
        };
        res.render("user/profile.ejs",obj);
    }
    else{
        res.redirect("/login");
    }
});

router.get('/logout',  function (req, res, next)  {
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });

router.get("/menu",async function(req,res){
    // var sql = `SELECT * FROM mess_lunch , user_tbl where mess_lunch.user_id = user_tbl.user_id`;
    var sql = `SELECT * from mess_lunch,user_admin_kyc_complated where user_admin_kyc_complated.user_admin_kyc_id = mess_lunch.user_admin_kyc_id;`
    var menu_meal_lunch = await exe(sql);

    var sql = `SELECT *  FROM banner WHERE banner_id = '4'`;
    var data = await exe(sql);

    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
        "menu_meal_lunch":menu_meal_lunch,
        "banner_edit_info": data[0],
    }
    res.render("user/menu.ejs",obj)
})

router.get("/menu1",async function(req,res){
    var sql = `SELECT * from mess_dinner,user_admin_kyc_complated where user_admin_kyc_complated.user_admin_kyc_id = mess_dinner.user_admin_kyc_id;`
    var menu_meal_dinner = await exe(sql);

    var sql = `SELECT *  FROM banner WHERE banner_id = '6'`;
    var data = await exe(sql);

    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
        "menu_meal_dinner":menu_meal_dinner,
        "banner_edit_info": data[0],
    }
    res.render("user/menu1.ejs",obj);
})

router.get("/about",async function(req,res){
    var aboutus_banner = await exe(`SELECT * FROM aboutus_banner`);
    var about1 = await exe(`SELECT * FROM about1`);
    var about2 = await exe(`SELECT * FROM about2`);
    var about3 = await exe(`SELECT * FROM about3`);

    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
        "aboutus_banner":aboutus_banner[0],
        "about1":about1,
        "about2":about2,
        "about3":about3,
    }
    res.render("user/about.ejs",obj);
});




router.get("/service",async function(req,res){
    var sql = `SELECT *  FROM banner WHERE banner_id = '1'`;
    var data = await exe(sql);
    
    // var sql2 = `SELECT  * from mess_service,user_tbl where mess_service.user_id = user_tbl.user_id`;
    var sql2 = `SELECT * from mess_service,user_admin_kyc_complated where user_admin_kyc_complated.user_admin_kyc_id = mess_service.user_admin_kyc_id;`
    var mess_service_data = await exe(sql2); 

    var sql1 = `SELECT * FROM mess_service1 WHERE mess_service1_id = '1'`;
    var mess_services1_edit_data1 = await exe(sql1);

    var sql3 = `SELECT * FROM mess_service1 WHERE mess_service1_id = '2'`;
    var mess_services1_edit_data2 = await exe(sql3);

    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
        "banner_edit_info": data[0],
        "mess_service_data":mess_service_data,
        "mess_services1_edit_data1":mess_services1_edit_data1,
        "mess_services1_edit_data2":mess_services1_edit_data2,
    }
    res.render("user/service.ejs",obj)
});


router.get("/blog",async function(req,res){
    var sql = `SELECT *  FROM banner WHERE banner_id = '2'`;
    var data = await exe(sql);

    var sql2 = `SELECT  * from mess_blogs,user_tbl where mess_blogs.user_id = user_tbl.user_id`;
    var mess_blog_data = await exe(sql2); 

    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
        "banner_edit_info1": data[0],
        "mess_blog_data":mess_blog_data,
    }
    res.render('user/blog.ejs',obj)
})

router.get("/contact",async function(req,res){ 
    var data = await exe(`SELECT * FROM conatct_address`);
    var obj = {
        "is_login" : ((req.session.user_id) ? true : false),
        "contact_address":data[0],
    }
    res.render("user/contact.ejs",obj);
});


router.post("/save_contact_info", async function(req, res) {
    d = req.body;
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    let day = currentDate.getDate().toString().padStart(2, '0');

    let formattedDate = `${day}-${month}-${year}`;
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');

    let formattedTime = `${hours}:${minutes}:${seconds}`;

    // Corrected spelling of contact_email
    var sql = `INSERT INTO conact_info (contact_fname, contact_lname, conatct_email, contact_mobile, contact_message, contact_date, contact_time) 
               VALUES ('${d.contact_fname}', '${d.contact_lname}', '${d.conatct_email}', '${d.contact_mobile}', '${d.contact_message}', '${formattedDate}', '${formattedTime}')`;

    var data = await exe(sql);
    res.send("<script> alert('Your Message Has been Sent Successfully...'); location.href='/contact';</script>");

});



module.exports = router;