/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_51N8SXtCMs7Z45UINk1PkMt1oxo0QD3z03Ff9xhzpQlnqXLAmFls5lSE1Bd75X1woaKZsCuDBbkoRnTXpShSBFS5700qtXGIXSr');

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  try {
    const { amount } = data;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
});