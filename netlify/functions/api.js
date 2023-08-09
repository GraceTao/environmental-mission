import { google } from "googleapis";
import express, { Router } from 'express';
import serverless from 'serverless-http';

const SHEET_ID = "1H0Rs1kbonJtlWkSydnf7D0TmVWr44TP47ZfJQt1tEtE";

const serviceAccount = {
   type: "service_account",
   project_id: "learn-undef-environ-mission",
   private_key_id: "24b57096704a611844ffb47eba08be1849c321a2",
   private_key: process.env.PRIVATE_KEY, // Replace escaped newline characters
   client_email: "environmental-mission-account@learn-undef-environ-mission.iam.gserviceaccount.com",
   client_id: "114049106431711445783",
   auth_uri: "https://accounts.google.com/o/oauth2/auth",
   token_uri: "https://oauth2.googleapis.com/token",
   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
   client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/environmental-mission-account%40learn-undef-environ-mission.iam.gserviceaccount.com",
   universe_domain: "googleapis.com"
}
console.log(private_key);
const api = express();
const router = Router();

const auth = new google.auth.GoogleAuth({
   credentials: serviceAccount,
   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

console.log(auth.credentials);

const service = google.sheets('v4');

router.post('/submituserdata', (req, res) => {
   console.log("Request body:", req.body);
   const { state, county, school, order } = req.body;
   
   try {
      service.spreadsheets.values.append({
         auth,
         spreadsheetId: SHEET_ID,
         range: 'Sheet1',
         valueInputOption: 'RAW',
         resource: {
            values: [[state, county, school, order]]
         }
      })

      console.log('Data added successfully');
      res.status(200).send('Data added successfully');
   } catch (err) {
      console.error('Error adding user data: ', err);
      res.status(500).json({message: 'An error occurred'});
   }
});

api.use('/api/', router);
export const handler = serverless(api);

// exports.handler = async (event, context) => {
//    console.log("inside submituserdata.js");
//    try {
//       const requestBody = JSON.parse(event.body);
//       const { state, county, school, order } = requestBody.formData;
//       console.log("Data received:", requestBody.formData);

//       service.spreadsheets.values.append({
//          auth,
//          spreadsheetId: SHEET_ID,
//          range: "Sheet1",
//          valueInputOption: "RAW",
//          resource: {
//             values: [[state, county, school, order]],
//          },
//       });
//       console.log("Write operation successful");

//       return {
//          statusCode: 200,
//          body: JSON.stringify({ message: "Data added successfully" }),
//       };
//    } catch (error) {
//       console.error("Error adding user data: ", error);
//       return {
//          statusCode: 500,
//          body: JSON.stringify({ message: "An error occurred" }),
//       };
//    }
// };
