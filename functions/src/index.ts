/** @format */

import * as functions from 'firebase-functions'

export const redirect = functions.https.onRequest((request, response) => {
	response.redirect('https://lorenzopieri.dev')
})
