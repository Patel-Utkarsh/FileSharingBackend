const express = require("express");

const { upload, download } = require("../Controllers/uploadAtServer");
const { signup, login } = require("../Controllers/authentication");
const { getData, getLinkData } = require("../Controllers/getData");
const { deletefile } = require("../Controllers/deleteFile");

const route = express.Router();

// Define routes
route.post('/api/upload', upload);
route.get('/api/file/:filename', download); 
route.post('/api/signup',signup);
route.post('/api/login',login);
route.post('/api/userData',getData)
route.post('/api/linkData',getLinkData)
route.post('/api/deleteFile',deletefile);

module.exports = route;
