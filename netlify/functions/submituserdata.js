import { google } from "googleapis";

const SHEET_ID = "1H0Rs1kbonJtlWkSydnf7D0TmVWr44TP47ZfJQt1tEtE";

const serviceAccount = {
   type: process.env.TYPE,
   project_id: process.env.PROJECT_ID,
   private_key_id: process.env.PRIVATE_KEY_ID,
   private_key: process.env.PRIVATE_KEY,
   client_email: process.env.CLIENT_EMAIL,
   client_id: process.env.CLIENT_ID,
   auth_uri: process.env.AUTH_URI,
   token_uri: process.env.TOKEN_URI,
   auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
   client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
   universe_domain: process.env.UNIVERSE_DOMAIN
}

const auth = new google.auth.GoogleAuth({
   credentials: serviceAccount,
   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

console.log("Auth:", auth);

const service = google.sheets("v4");

console.log("Service:", service);

exports.handler = async (event, context) => {
   console.log("inside submituserdata.js");
   try {
      const requestBody = JSON.parse(event.body);
      const { state, county, school, order } = requestBody.formData;
      console.log("Data received:", requestBody.formData);

      service.spreadsheets.values.append({
         auth,
         spreadsheetId: SHEET_ID,
         range: "Sheet1",
         valueInputOption: "RAW",
         resource: {
            values: [[state, county, school, order]],
         },
      });
      console.log("Write operation successful");

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
