// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors')({origin: true});

//Function that receive a rich text and save into database
exports.saveText = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        // Grab the text parameter.
        const id = req.body.id;
        const type = req.body.type;
        const content = req.body.content;
        // Push the new message into the Realtime Database using the Firebase Admin SDK.
        if(type == 'title'){
            return admin.database().ref('/text/'+id).push({title: content}).then((snapshot) => {
                // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
                return res.redirect(303, snapshot.ref.toString());
            });
        }else {
            return admin.database().ref('/text/'+id).push({content: content}).then((snapshot) => {
                // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
                return res.redirect(303, snapshot.ref.toString());
            });
        }
        
    });

    
  });

//Creates a new empty text
exports.createText = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        return admin.database().ref('/text/').push().then((snapshot) => {
            // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
            return res.redirect(303, snapshot.ref.toString());
        });
    });
});

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    return res.redirect(303, snapshot.ref.toString());
  });
});

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });