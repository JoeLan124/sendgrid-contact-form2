import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const email_from1 = process.env.EMAIL_FROM;
const email_to1 = process.env.EMAIL_TO;

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: email_from1, // Your email where you'll receive emails
      from: email_to1, // your website email address here
      subject: `Beantragung Berechtigung für ${req.body.surname} ${req.body.pnr}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="de">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 FORM</title>
        <meta name="description" content="The HTML5 FORM">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
             <div>${req.body.firstname};${req.body.surname};${req.body.pnr};${req.body.email};${req.body.description};${req.body.orga};${req.body.telefon};${req.body.surnameV};${req.body.pnrV}</div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
