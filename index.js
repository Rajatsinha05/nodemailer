const express = require("express");
const ndoemailer = require("nodemailer");
const app = express();
const transporter = ndoemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rajatsinha5467@gmail.com",
    pass: "xrfcloyropnbinns",
  },
});

const mailOptions = {
  from: "rajatsinha5467@gmail.com",
  to: "rw5.rajat.as@gmail.com",
  subject: "testing",
  text: "testing nodemailer",
};
app.get("/", (req, res) => {
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  res.send("checking")
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
