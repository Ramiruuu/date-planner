# Date Planner with Email (Node.js Version)

A web application to schedule events and send email invitations using Node.js.

## Structure
- `public/`: Client-side files
  - `index.html`: Main HTML structure
  - `styles.css`: CSS styling
  - `script.js`: Client-side JavaScript
- `server.js`: Node.js server with email sending
- `package.json`: Project configuration

## Setup
1. Install Node.js
2. Clone this repository
3. Run `npm install` to install dependencies
4. Update `server.js` with your email credentials:
   - Replace `'your-email@gmail.com'`
   - Replace `'your-app-specific-password'` (generate this from your email provider)
5. Run `npm start` to start the server
6. Visit `http://localhost:3000` in your browser

## Requirements
- Node.js
- An email account (Gmail example used)
- App-specific password for email authentication

## Notes
- Uses Gmail as the email service (modify `transporter` for other services)
- Port 3000 by default (change in `server.js` if needed)