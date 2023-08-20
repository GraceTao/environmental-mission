import { google } from "googleapis";
import express, { Router } from "express";
import serverless from "serverless-http";
import Redlock from "redlock";
import Client from "ioredis";
// import { createClient } from 'redis';

// const redis = createClient({
//     password: '5H9ekXm7YmcQo0bZNbTRekLPuFhgP2Ga',
//     socket: {
//         host: 'redis-15128.c228.us-central1-1.gce.cloud.redislabs.com',
//         port: 15128
//     }
// });

const SHEET_ID = "1H0Rs1kbonJtlWkSydnf7D0TmVWr44TP47ZfJQt1tEtE";

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
   port: 15128,
   password: process.env.REDIS_PASSWORD,
});

// redis.on("connect", () => {
//    console.log("Connected to Redis");
//    redis.quit(); // Close the connection
// });

// redis.on("error", (error) => {
//    console.error("Error connecting to Redis:", error);
//    redis.quit(); // Close the connection
// });

const redlock = new Redlock([redis], {
   driftFactor: 0.01,
   retryCount: -1,
   retryDelay: 200,
   retryJitter: 200,
});

// class Mutex {
//    constructor() {
//       this.locked = false;
//       this.queue = [];
//    }

//    async lock() {
//       if (this.locked) {
//          await new Promise((resolve) => this.queue.push(resolve));
//       } else {
//          this.locked = true;
//       }
//    }

//    unlock() {
//       if (this.queue.length > 0) {
//          const nextResolve = this.queue.shift();
//          nextResolve();
//       } else {
//          this.locked = false;
//       }
//    }
// }

// const mutex = new Mutex();

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

   // await mutex.lock();

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

   // finally {
   //    mutex.unlock();
   // }
});

api.use("/api", router);
export const handler = serverless(api);
