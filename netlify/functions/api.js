import { google } from "googleapis";
import express, { Router } from "express";
import serverless from "serverless-http";
import Redlock from "redlock";
import Client from "ioredis";

const SHEET_ID = process.env.SHEET_ID;

const serviceAccount = {
   type: "service_account",
   project_id: "learn-undef-environ-mission",
   private_key_id: process.env.PRIVATE_KEY_ID,
   private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
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

const redis = new Client({
   // host: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}`,
   host: process.env.REDIS_HOST,
   port: process.env.REDIS_PORT,
   password: process.env.REDIS_PASSWORD,
});

const redlock = new Redlock([redis], {
   driftFactor: 0.01,
   retryCount: -1,
   retryDelay: 200,
   retryJitter: 200,
});

router.post("/submituserdata", async (req, res) => {
   const {
      state,
      county,
      school,
      order,
      emailAttempts,
      inspectionAttempts,
      mapAttempts,
      wqiAttempts,
      passwordAttempts,
      ...rest
   } = req.body;

   const toAdd = [
      state,
      county,
      school,
      order,
      emailAttempts,
      inspectionAttempts,
      mapAttempts,
      wqiAttempts,
      passwordAttempts,
      ...Object.values(rest),
   ];

   redlock.using(["submit user data"], 5000, async (signal) => {
      try {
         await service.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: "Sheet1",
            valueInputOption: "RAW",
            resource: {
               values: [toAdd],
            },
         });

         console.log("Data added successfully");
         res.status(200).send("Data added successfully");
      } catch (err) {
         console.error("Error adding user data: ", err);
         res.status(500).json({ message: "An error occurred" });
      }
   });
});

api.use("/api", router);
export const handler = serverless(api);
