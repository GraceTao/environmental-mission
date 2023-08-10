import { google } from "googleapis";
import express, { Router } from "express";
import serverless from "serverless-http";

const SHEET_ID = "1H0Rs1kbonJtlWkSydnf7D0TmVWr44TP47ZfJQt1tEtE";

const serviceAccount = {
   type: "service_account",
   project_id: "learn-undef-environ-mission",
   private_key_id: "ea10f8c9d60f90bb6c77c4ea0dbcbfe8c3c28b69",
   private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
   client_email:
      "env-mission@learn-undef-environ-mission.iam.gserviceaccount.com",
   client_id: "113578363875197552143",
   auth_uri: "https://accounts.google.com/o/oauth2/auth",
   token_uri: "https://oauth2.googleapis.com/token",
   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
   client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/env-mission%40learn-undef-environ-mission.iam.gserviceaccount.com",
   universe_domain: "googleapis.com",
};

const api = express();
api.use(express.json());
const router = Router();

const auth = new google.auth.GoogleAuth({
   credentials: serviceAccount,
   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});


const service = google.sheets({ version: "v4", auth });

router.post("/submituserdata", async (req, res) => {
   const { state, county, school, order } = req.body;

   console.log("State county school order: " + state + county + school + order);

   try {
      service.spreadsheets.values.append({
         spreadsheetId: SHEET_ID,
         range: "Sheet1",
         valueInputOption: "RAW",
         resource: {
            values: [[state, county, school, order]],
         },
      });

      console.log("Data added successfully");
      res.status(200).send("Data added successfully");
   } catch (err) {
      console.error("Error adding user data: ", err);
      res.status(500).json({ message: "An error occurred" });
   }
});

router.get("/getdata", async (req, res) => {

   try {
      const response = await service.spreadsheets.values.get({
         spreadsheetId: SHEET_ID,
         range: "A1:A3",
       });
   
       const rows = response.data.values;
       console.log("Row data:", rows);
      res.status(200).send("Row fetched successfully");
   } catch (err) {
      console.error("Error adding user data: ", err);
      res.status(500).json({ message: "An error occurred" });
   }
});

api.use("/api", router);
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
