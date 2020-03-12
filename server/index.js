const express = require('express')
const multer  = require('multer')
var fs = require('fs');
var cors = require('cors')
var app = express()

app.use(cors());

app.get('/', (req, res, next) => {
  res.send('hello')
})

app.post('/', multer({ dest: 'uploads/' }).array('up1-name'), (req, res, next) => {
  console.log('req', req.query)
  res.end();
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

// app.post('/upload-formdata', multer({dest: 'upload/upload-formdata-tmp/'}).any(), function (req, res, next) {
//   console.log(req.files[0]);

//   var des_file = "./upload/upload-formdata-complete/" + req.files[0].originalname;
//   fs.readFile(req.files[0].path, function (err, data) {
//     fs.writeFile(des_file, data, function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         var response = {
//           message: 'File uploaded successfully',
//           filename: req.files[0].originalname
//         };
//         console.log(response);
//         res.end(JSON.stringify(response));
//       }
//     });
//   });
// });

// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })

// var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })

app.listen(3000, () => {
    console.log('server on, 3000');
});
