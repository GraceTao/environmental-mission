import { google } from "googleapis";
import express, { Router } from "express";
import serverless from "serverless-http";

const SHEET_ID = "1H0Rs1kbonJtlWkSydnf7D0TmVWr44TP47ZfJQt1tEtE";

const serviceAccount = {
   type: "service_account",
   project_id: "learn-undef-environ-mission",
   private_key_id: process.env.PRIVATE_KEY_ID,
   private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
   client_email: process.env.CLIENT_EMAIL,
   client_id: process.env.CLIENT_ID,
   auth_uri: "https://accounts.google.com/o/oauth2/auth",
   token_uri: "https://oauth2.googleapis.com/token",
   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
   client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
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
   console.log(req.body);

   try {
      await service.spreadsheets.values.append({
         spreadsheetId: SHEET_ID,
         range: "Sheet1",
         valueInputOption: "RAW",
         resource: {
            values: [Object.values(req.body)],
         },
      });

      console.log("Data added successfully");
      res.status(200).send("Data added successfully");
   } catch (err) {
      console.error("Error adding user data: ", err);
      res.status(500).json({ message: "An error occurred" });
   }
});

// router.get("/getdata", async (req, res) => {

//    try {
//       const response = await service.spreadsheets.values.get({
//          spreadsheetId: SHEET_ID,
//          range: "A1:C1",
//        });
   
//        const rows = response.data.values;
//        console.log("Row data:", rows);
//       res.status(200).send("Row fetched successfully");
//    } catch (err) {
//       console.error("Error adding user data: ", err);
//       res.status(500).json({ message: "An error occurred" });
//    }
// });

api.use("/api", router);
export const handler = serverless(api);
