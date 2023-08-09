import XLSX from 'xlsx';
import { writeFileSync } from 'fs';

const workbook = XLSX.readFile('./schoolData.xls');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const range = 'A8:F101285';

const data = XLSX.utils.sheet_to_json(worksheet, {header: 1, range});

const locationData = {};

for (const rowIndex in data) {
   const row = data[rowIndex];
   const level = row[XLSX.utils.decode_col('F')];

   if (level == "High") {
      const stateName = row[XLSX.utils.decode_col('C')];
      const countyName = row[XLSX.utils.decode_col('E')];
      const schoolName = row[XLSX.utils.decode_col('D')]

      if (!locationData[stateName]) {
         locationData[stateName] = {};
      }
      
      if (!locationData[stateName][countyName]) {
         locationData[stateName][countyName] = [];
      }

      if (!locationData[stateName][countyName].includes(schoolName)) {
         locationData[stateName][countyName].push(schoolName);
      }

   }
}

writeFileSync('locationData.js', JSON.stringify(locationData, null, 2));
