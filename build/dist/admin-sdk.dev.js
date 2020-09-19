"use strict";

var admin = require("firebase-admin");

var serviceAccount = require("./kiosk-online-firebase-adminsdk-yuf74-2609994c90");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kiosk-online.firebaseio.com"
});