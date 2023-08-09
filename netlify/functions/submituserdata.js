import { google } from "googleapis";
import { serviceAccount } from "./creds";

console.log(serviceAccount);

const SHEET_ID = "1H0Rs1kbonJtlWkSydnf7D0TmVWr44TP47ZfJQt1tEtE";

const auth = new google.auth.GoogleAuth({
   credentials: serviceAccount,
   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const service = google.sheets("v4");

exports.handler = async (event, context) => {
   try {
      console.log("Received event: ", event);
      const requestBody = JSON.parse(event.body);
      const { state, county, school, order } = requestBody.formData;

      service.spreadsheets.values.append({
         auth,
         spreadsheetId: SHEET_ID,
         range: "Sheet1",
         valueInputOption: "RAW",
         resource: {
            values: [[state, county, school, order]],
         },
      });

      return {
         statusCode: 200,
         body: JSON.stringify({ message: "Data added successfully" }),
      };
   } catch (error) {
      console.error("Error adding user data: ", error);
      return {
         statusCode: 500,
         body: JSON.stringify({ message: "An error occurred" }),
      };
   }
};
