# EVA Code — Interactive Demo

A pharmacist competition game with lead capture, hosted on GitHub Pages and wired to save entries to a Google Sheet.

## Setup (one-time)

### 1. Create the Google Sheet + Apps Script

1. Create a new Google Sheet.
2. In row 1, add these column headers exactly, in this order:
   `Timestamp | First Name | Last Name | Email | Mobile | Pharmacy | SCFHS No | Region | Score | Time`
3. Go to **Extensions > Apps Script**.
4. Delete any starter code, then paste in the contents of `AppsScript.gs` from this repo.
5. Click **Deploy > New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**, and authorize the permissions it requests.
7. Copy the **Web app URL** — you'll need it in step 2.

### 2. Wire the URL into the game

1. Open `index.html` in this repo.
2. Find this line near the bottom of the `<script>` section:
   ```js
   const GOOGLE_SHEET_ENDPOINT = 'PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```
3. Replace the placeholder with your Apps Script Web App URL from step 1.
4. Commit and push the change.

### 3. Enable GitHub Pages

1. In this repo, go to **Settings > Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set branch to `main` (or `master`) and folder to `/ (root)`.
4. Save. GitHub will give you a live URL, usually:
   `https://<your-username>.github.io/EVA-Code-Game/`

### 4. Test end-to-end

1. Open the live URL.
2. Play through the game and submit an entry.
3. Check the Google Sheet — a new row should appear within a few seconds.

## Notes

- The Google Sheet write happens silently in the background when a player submits their entry form. If the network request fails for any reason, the game continues normally — it never blocks or shows an error to the player.
- Apps Script web apps handle up to roughly 20,000–30,000 requests/day on a standard account, comfortably covering 5,000 responses.
