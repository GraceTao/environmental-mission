import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { google } from 'googleapis';
import {serviceAccount} from './creds.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

const SHEET_ID = '1H0Rs1kbonJtlWkSydnf7D0TmVWr44TP47ZfJQt1tEtE';

const auth = new google.auth.GoogleAuth({
   credentials: serviceAccount,
   scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const service = google.sheets('v4');

app.post('/sub', async (req, res) => {
   const { state, county, school, order } = req.body.formData;
   
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

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
