/**
 * EVA Code Game — Google Sheets submission handler
 *
 * SETUP:
 * 1. Create a new Google Sheet.
 * 2. In the first row, add these headers (exactly, in this order):
 *    Timestamp | First Name | Last Name | Email | Mobile | Pharmacy | SCFHS No | Region | Score | Time
 * 3. Extensions > Apps Script. Delete any starter code and paste this in.
 * 4. Click Deploy > New deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize the permissions it asks for.
 * 6. Copy the Web App URL it gives you — that's what goes into the HTML file.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.mobile || '',
      data.pharmacy || '',
      data.scfhs || '',
      data.area || '',
      data.score || '',
      data.time || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'EVA Code endpoint is live' }))
    .setMimeType(ContentService.MimeType.JSON);
}
