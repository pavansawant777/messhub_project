var express = require('express');
var router = express.Router();
var url = require('url');
var exe = require('../conn');
const path = require('path');

function checklogin(req, res, next) {
  if (req.session.user_id != undefined)
    next();
  else
    res.send("<script> alert('Invalid Login');location.href='/login';</script>")
}

// router.get('/', async function (req, res) {
//   var user_id = req.session.user_id;
//   if (user_id) {
//     var user_info = await exe(`SELECT * FROM  user_tbl WHERE user_id ='${user_id}'`);

//     var user_id = req.session.user_id;
//     var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
//     var user_kyc_profile_data_complated = await exe(sql);
//     obj = {
//       "is_login": ((req.session.user_id) ? true : false),
//       "user_info": user_info[0],
//       "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
//     };
//     res.render("userAdmin/userHome.ejs", obj);
//   }
//   else {
//     res.redirect("/login");
//   }
// });
router.get('/', async function (req, res) {
  var user_id = req.session.user_id;
  if (user_id) {
    var user_info = await exe(`SELECT * FROM  user_tbl WHERE user_id ='${user_id}'`);

    var user_id = req.session.user_id;
    var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
    var user_kyc_profile_data_complated = await exe(sql);

    var sql = `SELECT COUNT(*) as user_admin_kyc_complated_count FROM user_admin_kyc_complated WHERE user_id = '${req.session.user_id}'`;
    var user_admin_kyc_complated_data = await exe(sql);

    var sql = `SELECT COUNT(*) as user_admin_kyc_count FROM user_admin_kyc WHERE user_id = '${req.session.user_id}'`;
    var user_admin_kyc_data = await exe(sql);

    var sql = `SELECT COUNT(*) as mess_lunch_count FROM mess_lunch WHERE user_id = '${req.session.user_id}'`;
    var mess_lunch_data = await exe(sql);


    var sql = `SELECT COUNT(*) as mess_dinner_count FROM mess_dinner WHERE user_id = '${req.session.user_id}'`;
    var mess_dinner_data = await exe(sql);

    var sql = `SELECT COUNT(*) as mess_service_count FROM mess_service WHERE user_id = '${req.session.user_id}'`;
    var mess_service_data = await exe(sql);

    var sql = `SELECT COUNT(*) as mess_blogs_count FROM mess_blogs WHERE user_id = '${req.session.user_id}'`;
    var mess_blogs_data = await exe(sql);


    obj = {
      "is_login": ((req.session.user_id) ? true : false),
      "user_info": user_info[0],
      "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
      "user_admin_kyc_complated_data":user_admin_kyc_complated_data,
      "user_admin_kyc_data":user_admin_kyc_data,
      "mess_lunch_data":mess_lunch_data,
      "mess_dinner_data":mess_dinner_data,
      "mess_service_data":mess_service_data,
      "mess_blogs_data":mess_blogs_data,
    };
    res.render("userAdmin/userHome.ejs", obj);
  }
  else {
    res.redirect("/login");
  }
});


router.get('/Navbar', async function (req, res) {

  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);
  obj = {
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
  }
  res.render("userAdmin/Navbar.ejs", obj);
});



router.get('/logout', function (req, res, next) {
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

router.get('/user_admin_kyc_form', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);
  var obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,

  }
  res.render('userAdmin/user_admin_kyc_form.ejs', obj)
});

// CREATE TABLE user_admin_kyc (user_admin_kyc_id INT PRIMARY KEY AUTO_INCREMENT,user_admin_fname VARCHAR(200),user_admin_lname VARCHAR(200),	user_admin_email VARCHAR(200),user_admin_phone VARCHAR(200),user_admin_photo VARCHAR(200), user_admin_address TEXT,user_admin_mess_name VARCHAR(200),user_admin_mess_photo VARCHAR(200),user_admin_mess_area VARCHAR(200));

router.post('/save_kyc_data', checklogin, async (req, res) => {
  if (req.files) {
    var d = req.body;

    var user_admin_photo = new Date().getTime() + req.files.user_admin_photo.name;
    var user_admin_mess_photo = new Date().getTime() + req.files.user_admin_mess_photo.name;

    req.files.user_admin_photo.mv("public/uploads/" + user_admin_photo)
    req.files.user_admin_mess_photo.mv("public/uploads/" + user_admin_mess_photo)

    var sql = `INSERT INTO user_admin_kyc (user_id,user_admin_fname,user_admin_lname,user_admin_email,user_admin_phone,user_admin_photo,user_admin_address,user_admin_mess_name,user_admin_mess_photo,user_admin_mess_area) VALUES ('${req.session.user_id}','${d.user_admin_fname}', '${d.user_admin_lname}', '${d.user_admin_email}','${d.user_admin_phone}','${user_admin_photo}','${d.user_admin_address}','${d.user_admin_mess_name}','${user_admin_mess_photo}','${d.user_admin_mess_area}')`;

    var data = await exe(sql);

  }
  else {
    var d = req.body;
    var sql = `INSERT INTO user_admin_kyc (user_id,user_admin_fname,user_admin_lname,user_admin_email,user_admin_phone,user_admin_address,user_admin_mess_name,user_admin_mess_area) VALUES ('${req.session.user_id}','${d.user_admin_fname}', '${d.user_admin_lname}', '${d.user_admin_email},'${d.user_admin_phone}','${d.user_admin_address}','${d.user_admin_mess_name}','${d.user_admin_mess_area}')`;

    var data = await exe(sql);

  }
  res.redirect('/userAdmin/user_admin_kyc_form');

});


router.get('/user_Admin_profile', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var data = await exe(sql);

  var user_id1 = req.session.user_id;
  var sql1 = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id1}'`;
  var user_kyc_profile_data_complated = await exe(sql1);
  obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_data": data,
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
  }

  res.render('userAdmin/user_Admin_profile.ejs', obj)
});

router.get('/edit_user_admin_profile/:id', checklogin, async (req, res) => {
  var d = req.params.id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_admin_kyc_id = '${d}'`;
  var data = await exe(sql);

  var user_id = req.session.user_id;
  var sql1 = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql1);

  obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_admin_kyc_complated_data": data[0],
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
  }

  res.render('userAdmin/edit_user_admin_profile.ejs', obj);
});

// CREATE TABLE user_admin_kyc (user_admin_kyc_id INT PRIMARY KEY AUTO_INCREMENT,user_admin_fname VARCHAR(200),user_admin_lname VARCHAR(200),	user_admin_email VARCHAR(200),user_admin_phone VARCHAR(200),user_admin_photo VARCHAR(200), user_admin_address TEXT,user_admin_mess_name VARCHAR(200),user_admin_mess_photo VARCHAR(200),user_admin_mess_area VARCHAR(200));


router.post('/update_user_admin_profile_data', checklogin, async (req, res) => {
  try {
    const d = req.body;
    const uploadDir = path.join(__dirname, '..', 'public', 'uploads');

    const uploadFile = async (file) => {
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}_${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      await file.mv(filePath);
      return fileName;
    };

    let fileUploads = {};

    if (req.files) {
      if (req.files.user_admin_photo) {
        fileUploads.user_admin_photo = await uploadFile(req.files.user_admin_photo);
      }
      if (req.files.user_admin_mess_photo) {
        fileUploads.user_admin_mess_photo = await uploadFile(req.files.user_admin_mess_photo);
      }
    }

    // Constructing the SQL query dynamically based on the uploaded files
    let updateFields = [
      `user_admin_fname = ?`,
      `user_admin_lname = ?`,
      `user_admin_email = ?`,
      `user_admin_phone = ?`,
      `user_admin_address = ?`,
      `user_admin_mess_name = ?`,
      `user_admin_mess_area = ?`
    ];

    let params = [
      d.user_admin_fname,
      d.user_admin_lname,
      d.user_admin_email,
      d.user_admin_phone,
      d.user_admin_address,
      d.user_admin_mess_name,
      d.user_admin_mess_area
    ];

    if (fileUploads.user_admin_photo) {
      updateFields.push(`user_admin_photo = ?`);
      params.push(fileUploads.user_admin_photo);
    }

    if (fileUploads.user_admin_mess_photo) {
      updateFields.push(`user_admin_mess_photo = ?`);
      params.push(fileUploads.user_admin_mess_photo);
    }

    params.push(d.user_admin_kyc_id);

    const sql = `UPDATE user_admin_kyc_complated SET ${updateFields.join(', ')} WHERE user_admin_kyc_id = ?`;

    await exe(sql, params);

    res.redirect('/userAdmin/user_Admin_profile');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/mess_details', checklogin, async (req, res) => {

  var user_id = req.session.user_id;
  var sql1 = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql1);

  var mess_details_store_data = await exe(`SELECT * FROM user_admin_mess_details WHERE user_id = '${req.session.user_id}'`);

  obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "mess_details_store_data": mess_details_store_data,
  }
  res.render('userAdmin/mess_details.ejs', obj);
});

// CREATE TABLE user_admin_mess_details (user_id INT,user_admin_mess_details_id INT PRIMARY KEY AUTO_INCREMENT,user_admin_mess_name VARCHAR(299),user_admin_mess_info TEXT,user_admin_mess_area VARCHAR(299),user_admin_mess_photo VARCHAR(300));


router.post('/save_user_admin_mess_details', checklogin, async (req, res) => {
  if (req.files) {
    var d = req.body;
    var user_id = req.session.user_id;
    var user_admin_mess_photo = new Date().getTime() + req.files.user_admin_mess_photo.name;
    req.files.user_admin_mess_photo.mv("public/uploads/" + user_admin_mess_photo)
    var sql = `INSERT INTO user_admin_mess_details (user_id,user_admin_mess_name,user_admin_mess_info,user_admin_mess_area,user_admin_mess_photo) VALUES ('${user_id}','${d.user_admin_mess_name}','${d.user_admin_mess_info}','${d.user_admin_mess_area}','${user_admin_mess_photo}') `;
    var data = await exe(sql);
  }

  else {
    var d = req.body;
    var user_id = req.session.user_id;
    var sql = `INSERT INTO user_admin_mess_details (user_id,user_admin_mess_name,user_admin_mess_info,user_admin_mess_area) VALUES ('${user_id}','${d.user_admin_mess_name}','${d.user_admin_mess_info}','${d.user_admin_mess_area}') `;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_details')
});



router.get('/edit_mess_details_store_data/:id', checklogin, async (req, res) => {
  var user_id = req.session.id;
  var sql1 = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql1);

  var edit_mess_details_id = req.params.id;
  var sql = `SELECT * FROM  user_admin_mess_details WHERE user_admin_mess_details_id = '${edit_mess_details_id}' `;
  var edit_mess_details_data = await exe(sql);

  obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "edit_mess_details_data": edit_mess_details_data[0],
  }
  res.render('userAdmin/edit_mess_details_store_data.ejs', obj);
});


router.post('/update_user_admin_mess_details', checklogin, async (req, res) => {
  if (req.files) {
    var user_admin_mess_photo = new Date().getTime() + req.files.user_admin_mess_photo.name;
    req.files.user_admin_mess_photo.mv("public/uploads/" + user_admin_mess_photo)

    var d = req.body;
    var sql = `UPDATE user_admin_mess_details SET user_admin_mess_name = '${d.user_admin_mess_name}' , user_admin_mess_info = '${d.user_admin_mess_info}' , user_admin_mess_area = '${d.user_admin_mess_area}' , user_admin_mess_photo = '${user_admin_mess_photo}' WHERE user_admin_mess_details_id = '${d.user_admin_mess_details_id}'`;
    var data = await exe(sql);

  } else {
    var d = req.body;

    var sql = `UPDATE user_admin_mess_details SET user_admin_mess_name = '${d.user_admin_mess_name}' , user_admin_mess_info = '${d.user_admin_mess_info}' , user_admin_mess_area = '${d.user_admin_mess_area}'  WHERE user_admin_mess_details_id = '${d.user_admin_mess_details_id}'`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_details');
});

// --------------------------------------------------------------------------------------------------------------------
// CREATE TABLE mess_service (user_id INT,mess_service_id INT PRIMARY KEY AUTO_INCREMENT,service_heading VARCHAR(200),service_title VARCHAR(200),service_mess_image VARCHAR(200),service_mess_title VARCHAR(200),service_mess_description VARCHAR(200));

router.get('/mess_services', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);
  var sql1 = `SELECT * FROM mess_service WHERE user_id = '${req.session.user_id}'`;
  var mess_data = await exe(sql1);
  var obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "mess_service_data": mess_data,
  }
  res.render('userAdmin/mess_services.ejs', obj);

});


router.post('/mess_service_save', checklogin, async (req, res) => {
  if (req.files) {
    var service_mess_image = new Date().getTime() + req.files.service_mess_image.name;
    req.files.service_mess_image.mv("public/uploads/" + service_mess_image);
    var d = req.body;
    var sql = `INSERT INTO mess_service (user_id,service_heading,service_title,service_mess_image,service_mess_title,service_mess_description,user_admin_kyc_id) VALUES('${req.session.user_id}','${d.service_heading}','${d.service_title}','${service_mess_image}','${d.service_mess_title}','${d.service_mess_description}','${d.user_admin_kyc_id}')`;
    var data = await exe(sql);
  }
  else {
    var d = req.body;
    var sql = `INSERT INTO mess_service (user_id,service_heading,service_title,service_mess_title,service_mess_description,user_admin_kyc_id) VALUES('${req.session.user_id}','${d.service_heading}','${d.service_title}','${d.service_mess_title}','${d.service_mess_description}','${d.user_admin_kyc_id}')`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_services');

});

router.get('/edit_mess_service_data/:id', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var mess_id = req.params.id;
  var sql1 = `SELECT * FROM mess_service WHERE mess_service_id = '${mess_id}'`;
  var mess_edit_data = await exe(sql1);
  var obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "mess_edit_data": mess_edit_data[0],
  }
  res.render('userAdmin/edit_mess_service_data.ejs', obj)
});


router.post('/update_mess_service', checklogin, async (req, res) => {
  if (req.files) {
    var service_mess_image = new Date().getTime() + req.files.service_mess_image.name;
    req.files.service_mess_image.mv("public/uploads/" + service_mess_image);
    var d = req.body;
    var sql = `UPDATE mess_service SET service_heading = '${d.service_heading}' , service_title = '${d.service_title}' , service_mess_image = '${service_mess_image}' , service_mess_title = '${d.service_mess_title}' , service_mess_description = '${d.service_mess_description}' WHERE mess_service_id = '${d.mess_service_id}'`;
    var data = await exe(sql);
  }
  else {
    var d = req.body;
    var sql = `UPDATE mess_service SET service_heading = '${d.service_heading}' , service_title = '${d.service_title}' , service_mess_title = '${d.service_mess_title}' , service_mess_description = '${d.service_mess_description}' WHERE mess_service_id = '${d.mess_service_id}'`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_services')
});


router.get('/mess_services1', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var sql1 = `SELECT * FROM mess_service1 WHERE mess_service1_id = '1'`;
  var mess_services1_edit_data = await exe(sql1);

  var obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "mess_services1_edit_data": mess_services1_edit_data[0],
  }
  res.render('userAdmin/mess_services1.ejs', obj);
});

// CREATE TABLE mess_service1 (mess_service1_id INT PRIMARY KEY AUTO_INCREMENT,mess_service1_img VARCHAR(200),mess_service1_heading VARCHAR(200),mess_service1_decription1 VARCHAR(200),mess_service1_decription2 VARCHAR(200))

router.post('/save_mess_service1', checklogin, async (req, res) => {

  if (req.files) {
    var d = req.body;
    var mess_service1_img = new Date().getTime() + req.files.mess_service1_img.name;
    req.files.mess_service1_img.mv("public/uploads/" + mess_service1_img);

    // var sql = `INSERT INTO mess_service1 (mess_service1_img,mess_service1_heading,mess_service1_decription1,mess_service1_decription2) VALUES ('${mess_service1_img}','${d.mess_service1_heading}','${d.mess_service1_decription1}','${d.mess_service1_decription2}')`;
    var sql = `UPDATE mess_service1 SET mess_service1_img = '${mess_service1_img}' , mess_service1_heading = '${d.mess_service1_heading}', mess_service1_decription1 = '${d.mess_service1_decription1}' , mess_service1_decription2 = '${d.mess_service1_decription2}' WHERE mess_service1_id = '${d.mess_service1_id}'`;
    var data = await exe(sql);
  }
  else {
    var d = req.body;
    // var sql = `INSERT INTO mess_service1 (mess_service1_heading,mess_service1_decription1,mess_service1_decription2) VALUES ('${d.mess_service1_heading}','${d.mess_service1_decription1}','${d.mess_service1_decription2}')`;
    var sql = `UPDATE mess_service1 SET  mess_service1_heading = '${d.mess_service1_heading}', mess_service1_decription1 = '${d.mess_service1_decription1}' , mess_service1_decription2 = '${d.mess_service1_decription2}' WHERE mess_service1_id = '${d.mess_service1_id}'`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_services1')

});


router.get('/mess_services2', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var sql1 = `SELECT * FROM mess_service1 WHERE mess_service1_id = '2'`;
  var mess_services1_edit_data = await exe(sql1);

  var obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "mess_services1_edit_data": mess_services1_edit_data[0],
  }
  res.render('userAdmin/mess_services2.ejs', obj);
});

router.get('/delete_mess_service_data/:id', async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_service WHERE mess_service_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/userAdmin/mess_services');
});


router.get('/mess_blogs', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var sql1 = `SELECT * FROM mess_blogs WHERE user_id = '${req.session.user_id}'`;
  var mess_blog_data = await exe(sql1);


  var obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "mess_blog_data": mess_blog_data,
  }
  res.render('userAdmin/mess_blogs.ejs', obj);
});

// CREATE TABLE mess_blogs (user_id INT,mess_blogs_id INT PRIMARY KEY AUTO_INCREMENT,mess_blog_images VARCHAR(200),mess_blog_heading mess_blog_description TEXT);

router.post('/save_mess_blogs', checklogin, async (req, res) => {
  if (req.files) {
    var d = req.body;
    var mess_blog_images = new Date().getTime() + req.files.mess_blog_images.name;
    req.files.mess_blog_images.mv("public/uploads/" + mess_blog_images);
    var sql = `INSERT INTO mess_blogs(user_id,mess_blog_images,mess_blog_heading,mess_blog_description) VALUES('${req.session.user_id}','${mess_blog_images}','${d.mess_blog_heading}','${d.mess_blog_description}')`;
    var data = await exe(sql);
  }
  else {
    var d = req.body;
    var sql = `INSERT INTO mess_blogs(user_id,mess_blog_heading,mess_blog_description) VALUES('${mess_blog_images}','${d.mess_blog_heading}','${d.mess_blog_description}')`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_blogs');
});


router.get('/edit_mess_blog/:id', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var mess_blogs_id = req.params.id;
  var sql1 = `SELECT *  FROM mess_blogs WHERE mess_blogs_id = '${mess_blogs_id}'`;
  var mess_blogs_id_data = await exe(sql1);

  var obj = {
    "is_login": ((req.session.user_id) ? true : false),
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "mess_blogs_id_data": mess_blogs_id_data[0],
  }
  res.render('userAdmin/edit_mess_blog.ejs', obj)
});

router.post('/update_mess_blogs', checklogin, async (req, res) => {
  if (req.files) {
    var d = req.body;
    var mess_blog_images = new Date().getTime() + req.files.mess_blog_images.name;
    req.files.mess_blog_images.mv("public/uploads/" + mess_blog_images);
    var sql = `UPDATE mess_blogs SET mess_blog_images = '${mess_blog_images}' , mess_blog_heading = '${d.mess_blog_heading}' , mess_blog_description = '${d.mess_blog_description}' WHERE mess_blogs_id = '${d.mess_blogs_id}'`;
    var data = await exe(sql);
  } else {
    var d = req.body;
    var sql = `UPDATE mess_blogs SET mess_blog_heading = '${d.mess_blog_heading}' , mess_blog_description = '${d.mess_blog_description}' WHERE mess_blogs_id = '${d.mess_blogs_id}'`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_blogs');
});


router.get('/delete_mess_blog/:id', checklogin, async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_blogs WHERE mess_blogs_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/userAdmin/mess_services');
});


router.get('/mess_lunchs', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var sql1 = `SELECT * FROM mess_lunch WHERE user_id = '${req.session.user_id}'`;
  var mess_meal_lunch = await exe(sql1);

  obj = {
    "user_kyc_profile_data_complated":user_kyc_profile_data_complated,
    "mess_meal_lunch": mess_meal_lunch,
  }
  res.render('userAdmin/mess_lunchs.ejs', obj);
});

// CREATE TABLE mess_lunch (user_id INT,mess_lunch_id INT PRIMARY KEY AUTO_INCREMENT,user_admin_kyc_id INT,mess_name TEXT,mess_images TEXT,mess_discription TEXT,mess_sunday_meal_name TEXT,mess_sunday_meal_img TEXT,mess_monday_meal_name TEXT,mess_monday_meal_img TEXT,mess_tuesday_meal_name TEXT,mess_tuesday_meal_img TEXT,mess_wednesday_meal_name TEXT,mess_wednesday_meal_img TEXT,mess_thursday_meal_name TEXT,mess_thursday_meal_img TEXT,mess_friday_meal_name TEXT,mess_friday_meal_img TEXT,mess_saturday_meal_name TEXT,mess_saturday_meal_img TEXT);


router.post('/save_mess_meal', checklogin, async (req, res) => {
  try {
  if (req.files) {
    var d = req.body;
    var mess_images = new Date().getTime() + req.files.mess_images.name;
    req.files.mess_images.mv("public/uploads/" + mess_images);

    var mess_sunday_meal_img = new Date().getTime() + req.files.mess_sunday_meal_img.name;
    req.files.mess_sunday_meal_img.mv("public/uploads/" + mess_sunday_meal_img);

    var mess_monday_meal_img = new Date().getTime() + req.files.mess_monday_meal_img.name;
    req.files.mess_monday_meal_img.mv("public/uploads/" + mess_monday_meal_img);

    var mess_tuesday_meal_img = new Date().getTime() + req.files.mess_tuesday_meal_img.name;
    req.files.mess_tuesday_meal_img.mv("public/uploads/" + mess_tuesday_meal_img);

    var mess_wednesday_meal_img = new Date().getTime() + req.files.mess_wednesday_meal_img.name;
    req.files.mess_wednesday_meal_img.mv("public/uploads/" + mess_wednesday_meal_img);

    var mess_thursday_meal_img = new Date().getTime() + req.files.mess_thursday_meal_img.name;
    req.files.mess_thursday_meal_img.mv("public/uploads/" + mess_thursday_meal_img);

    var mess_friday_meal_img = new Date().getTime() + req.files.mess_friday_meal_img.name;
    req.files.mess_friday_meal_img.mv("public/uploads/" + mess_friday_meal_img);

    var mess_saturday_meal_img = new Date().getTime() + req.files.mess_saturday_meal_img.name;
    req.files.mess_saturday_meal_img.mv("public/uploads/" + mess_saturday_meal_img);

    var sql = `INSERT INTO mess_lunch(user_id,user_admin_kyc_id,mess_name,mess_images,mess_discription,mess_sunday_meal_name,mess_sunday_meal_img,mess_monday_meal_name,mess_monday_meal_img,mess_tuesday_meal_name,mess_tuesday_meal_img,mess_wednesday_meal_name,mess_wednesday_meal_img,mess_thursday_meal_name,mess_thursday_meal_img,mess_friday_meal_name,mess_friday_meal_img,mess_saturday_meal_name,mess_saturday_meal_img) VALUES ('${req.session.user_id}','${d.user_admin_kyc_id}','${d.mess_name}','${mess_images}','${d.mess_discription}','${d.mess_sunday_meal_name}','${mess_sunday_meal_img}','${d.mess_monday_meal_name}','${mess_monday_meal_img}','${d.mess_tuesday_meal_name}','${mess_tuesday_meal_img}','${d.mess_wednesday_meal_name}','${mess_wednesday_meal_img}','${d.mess_thursday_meal_name}','${mess_thursday_meal_img}','${d.mess_friday_meal_name}','${mess_friday_meal_img}','${d.mess_saturday_meal_name}','${mess_saturday_meal_img}')`;
    var data = await exe(sql);
  }
  else {
    var d = req.body;
    var sql = `INSERT INTO mess_lunch(user_id,user_admin_kyc_id,mess_name,mess_discription,mess_sunday_meal_name,mess_monday_meal_name,mess_tuesday_meal_name,mess_wednesday_meal_name,mess_thursday_meal_name,mess_friday_meal_name,mess_saturday_meal_name) VALUES ('${req.session.user_id}','${d.user_admin_kyc_id}','${d.mess_name}','${d.mess_discription}','${d.mess_sunday_meal_name}','${d.mess_monday_meal_name}','${d.mess_tuesday_meal_name}','${d.mess_wednesday_meal_name}','${d.mess_thursday_meal_name}','${d.mess_friday_meal_name}','${d.mess_saturday_meal_name}')`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_lunchs');
} catch (error) {
  res.send("<script> alert('Please All image Select');location.href='/userAdmin/mess_lunchs';</script>")
}
});


router.get('/delete_mess_meal_lunch/:id', checklogin, async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_lunch WHERE mess_lunch_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/userAdmin/mess_lunchs');
});

router.get('/edit_mess_meal_lunch/:id', checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var id = req.params.id;
  var sql1 = `SELECT * FROM mess_lunch WHERE mess_lunch_id = '${id}'`;
  var edit_mess_meal_data = await exe(sql1);
  obj = {
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "edit_mess_meal_data": edit_mess_meal_data[0],
  }
  res.render('userAdmin/edit_mess_meal_lunch.ejs', obj);
});


router.post('/update_mess_meal',checklogin, async (req, res) => {
  try {
    const d = req.body;
    const uploadDir = path.join(__dirname, '..', 'public', 'uploads');

    const uploadFile = async (file) => {
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}_${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      await file.mv(filePath);
      return fileName;
    };

    const fileFields = [
      'mess_images',
      'mess_sunday_meal_img',
      'mess_monday_meal_img',
      'mess_tuesday_meal_img',
      'mess_wednesday_meal_img',
      'mess_thursday_meal_img',
      'mess_friday_meal_img',
      'mess_saturday_meal_img',
    ];

    let fileUploads = {};

    if (req.files) {
      const uploadPromises = fileFields.map(async (field) => {
        if (req.files[field]) {
          fileUploads[field] = await uploadFile(req.files[field]);
        }
      });

      await Promise.all(uploadPromises);
    }

    let updateFields = [
      `mess_name = ?`,
      `mess_discription = ?`,
      `mess_sunday_meal_name = ?`,
      `mess_monday_meal_name = ?`,
      `mess_tuesday_meal_name = ?`,
      `mess_wednesday_meal_name = ?`,
      `mess_thursday_meal_name = ?`,
      `mess_friday_meal_name = ?`,
      `mess_saturday_meal_name = ?`
    ];

    let params = [
      d.mess_name,
      d.mess_discription,
      d.mess_sunday_meal_name,
      d.mess_monday_meal_name,
      d.mess_tuesday_meal_name,
      d.mess_wednesday_meal_name,
      d.mess_thursday_meal_name,
      d.mess_friday_meal_name,
      d.mess_saturday_meal_name
    ];

    fileFields.forEach(field => {
      if (fileUploads[field]) {
        updateFields.push(`${field} = ?`);
        params.push(fileUploads[field]);
      }
    });

    params.push(d.mess_lunch_id);

    const sql = `UPDATE mess_lunch SET ${updateFields.join(', ')} WHERE mess_lunch_id = ?`;

    await exe(sql, params);

    res.redirect('/userAdmin/mess_lunchs');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
    res.send("<script> alert('Invalid Login');location.href='/login';</script>")
  }
});

// CREATE TABLE mess_dinner (user_id INT,mess_dinner_id INT PRIMARY KEY AUTO_INCREMENT,user_admin_kyc_id INT,mess_name TEXT,mess_images TEXT,mess_discription TEXT,mess_sunday_meal_name TEXT,mess_sunday_meal_img TEXT,mess_monday_meal_name TEXT,mess_monday_meal_img TEXT,mess_tuesday_meal_name TEXT,mess_tuesday_meal_img TEXT,mess_wednesday_meal_name TEXT,mess_wednesday_meal_img TEXT,mess_thursday_meal_name TEXT,mess_thursday_meal_img TEXT,mess_friday_meal_name TEXT,mess_friday_meal_img TEXT,mess_saturday_meal_name TEXT,mess_saturday_meal_img TEXT);

router.get('/mess_dinner',checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var sql1 = `SELECT * FROM mess_dinner WHERE user_id = '${req.session.user_id}'`;
  var mess_meal_dinner = await exe(sql1);

  obj = {
    "user_kyc_profile_data_complated":user_kyc_profile_data_complated,
    "mess_meal_dinner":mess_meal_dinner,
  }
  res.render('userAdmin/mess_dinner.ejs',obj);
});


router.post('/save_mess_dinner_meal', checklogin, async (req, res) => {
  try {
  if (req.files) {
    var d = req.body;
    var mess_images = new Date().getTime() + req.files.mess_images.name;
    req.files.mess_images.mv("public/uploads/" + mess_images);

    var mess_sunday_meal_img = new Date().getTime() + req.files.mess_sunday_meal_img.name;
    req.files.mess_sunday_meal_img.mv("public/uploads/" + mess_sunday_meal_img);

    var mess_monday_meal_img = new Date().getTime() + req.files.mess_monday_meal_img.name;
    req.files.mess_monday_meal_img.mv("public/uploads/" + mess_monday_meal_img);

    var mess_tuesday_meal_img = new Date().getTime() + req.files.mess_tuesday_meal_img.name;
    req.files.mess_tuesday_meal_img.mv("public/uploads/" + mess_tuesday_meal_img);

    var mess_wednesday_meal_img = new Date().getTime() + req.files.mess_wednesday_meal_img.name;
    req.files.mess_wednesday_meal_img.mv("public/uploads/" + mess_wednesday_meal_img);

    var mess_thursday_meal_img = new Date().getTime() + req.files.mess_thursday_meal_img.name;
    req.files.mess_thursday_meal_img.mv("public/uploads/" + mess_thursday_meal_img);

    var mess_friday_meal_img = new Date().getTime() + req.files.mess_friday_meal_img.name;
    req.files.mess_friday_meal_img.mv("public/uploads/" + mess_friday_meal_img);

    var mess_saturday_meal_img = new Date().getTime() + req.files.mess_saturday_meal_img.name;
    req.files.mess_saturday_meal_img.mv("public/uploads/" + mess_saturday_meal_img);

    var sql = `INSERT INTO mess_dinner(user_id,user_admin_kyc_id,mess_name,mess_images,mess_discription,mess_sunday_meal_name,mess_sunday_meal_img,mess_monday_meal_name,mess_monday_meal_img,mess_tuesday_meal_name,mess_tuesday_meal_img,mess_wednesday_meal_name,mess_wednesday_meal_img,mess_thursday_meal_name,mess_thursday_meal_img,mess_friday_meal_name,mess_friday_meal_img,mess_saturday_meal_name,mess_saturday_meal_img) VALUES ('${req.session.user_id}','${d.user_admin_kyc_id}','${d.mess_name}','${mess_images}','${d.mess_discription}','${d.mess_sunday_meal_name}','${mess_sunday_meal_img}','${d.mess_monday_meal_name}','${mess_monday_meal_img}','${d.mess_tuesday_meal_name}','${mess_tuesday_meal_img}','${d.mess_wednesday_meal_name}','${mess_wednesday_meal_img}','${d.mess_thursday_meal_name}','${mess_thursday_meal_img}','${d.mess_friday_meal_name}','${mess_friday_meal_img}','${d.mess_saturday_meal_name}','${mess_saturday_meal_img}')`;
    var data = await exe(sql);
  }
  else {
    var d = req.body;
    var sql = `INSERT INTO mess_dinner(user_id,user_admin_kyc_id,mess_name,mess_discription,mess_sunday_meal_name,mess_monday_meal_name,mess_tuesday_meal_name,mess_wednesday_meal_name,mess_thursday_meal_name,mess_friday_meal_name,mess_saturday_meal_name) VALUES ('${req.session.user_id}','${d.user_admin_kyc_id}','${d.mess_name}','${d.mess_discription}','${d.mess_sunday_meal_name}','${d.mess_monday_meal_name}','${d.mess_tuesday_meal_name}','${d.mess_wednesday_meal_name}','${d.mess_thursday_meal_name}','${d.mess_friday_meal_name}','${d.mess_saturday_meal_name}')`;
    var data = await exe(sql);
  }
  res.redirect('/userAdmin/mess_dinner');
} catch (error) {
  res.send("<script> alert('Please All image Select');location.href='/userAdmin/mess_dinner';</script>")
}
});


router.get('/delete_mess_meal_dinner/:id',checklogin, async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_dinner WHERE mess_dinner_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/userAdmin/mess_dinner');
});

router.get('/edit_mess_meal_dinner/:id',checklogin, async (req, res) => {
  var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated WHERE user_id = '${user_id}'`;
  var user_kyc_profile_data_complated = await exe(sql);

  var id = req.params.id;
  var sql1 = `SELECT * FROM mess_dinner WHERE mess_dinner_id = '${id}'`;
  var edit_mess_meal_data = await exe(sql1);
  obj = {
    "user_kyc_profile_data_complated": user_kyc_profile_data_complated,
    "edit_mess_meal_data": edit_mess_meal_data[0],
  }
  res.render('userAdmin/edit_mess_meal_dinner.ejs', obj);
});



router.post('/update_mess_meal_dinner',checklogin, async (req, res) => {
  try {
    const d = req.body;
    const uploadDir = path.join(__dirname, '..', 'public', 'uploads');

    const uploadFile = async (file) => {
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}_${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      await file.mv(filePath);
      return fileName;
    };

    const fileFields = [
      'mess_images',
      'mess_sunday_meal_img',
      'mess_monday_meal_img',
      'mess_tuesday_meal_img',
      'mess_wednesday_meal_img',
      'mess_thursday_meal_img',
      'mess_friday_meal_img',
      'mess_saturday_meal_img',
    ];

    let fileUploads = {};

    if (req.files) {
      const uploadPromises = fileFields.map(async (field) => {
        if (req.files[field]) {
          fileUploads[field] = await uploadFile(req.files[field]);
        }
      });

      await Promise.all(uploadPromises);
    }

    let updateFields = [
      `mess_name = ?`,
      `mess_discription = ?`,
      `mess_sunday_meal_name = ?`,
      `mess_monday_meal_name = ?`,
      `mess_tuesday_meal_name = ?`,
      `mess_wednesday_meal_name = ?`,
      `mess_thursday_meal_name = ?`,
      `mess_friday_meal_name = ?`,
      `mess_saturday_meal_name = ?`
    ];

    let params = [
      d.mess_name,
      d.mess_discription,
      d.mess_sunday_meal_name,
      d.mess_monday_meal_name,
      d.mess_tuesday_meal_name,
      d.mess_wednesday_meal_name,
      d.mess_thursday_meal_name,
      d.mess_friday_meal_name,
      d.mess_saturday_meal_name
    ];

    fileFields.forEach(field => {
      if (fileUploads[field]) {
        updateFields.push(`${field} = ?`);
        params.push(fileUploads[field]);
      }
    });

    params.push(d.mess_dinner_id);

    const sql = `UPDATE mess_dinner SET ${updateFields.join(', ')} WHERE mess_dinner_id = ?`;

    await exe(sql, params);

    res.redirect('/userAdmin/mess_dinner');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
    res.send("<script> alert('Invalid Login');location.href='/login';</script>")
  }
});


module.exports = router;