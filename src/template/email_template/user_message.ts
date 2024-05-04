export default function userMsgTemplate(data: UserMsg) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            background-color: #fff;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #007bff;
            color: #ffffff;
            padding: 10px;
            text-align: center;
          }
          .content {
            padding: 20px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New User Message</h1>
          </div>
          <div class="content">
            <p>From: <b>${data.name}</b></p>
            <p>${data.message}</p>
            <p>
              User Email: <b>${data.email}</b><br/>
              User Phone Number: <b>${data.phone}</b>
            </p>
          </div>
        </div>
      </body>
    </html>
    `;
}

interface UserMsg {
  name: string;
  email: string;
  phone: string;
  message: string;
}
