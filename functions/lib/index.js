"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.redirect = functions.https.onRequest((request, response) => {
    response.redirect('https://lorenzopieri.dev');
});
//# sourceMappingURL=index.js.map