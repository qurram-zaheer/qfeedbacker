const keys = require("../config/keys");
const mailgun = require("mailgun-js")({
  apiKey: keys.mailGunKey,
  domain: keys.mailGunDomain
});

class MailgunMailer {
  constructor({ subject, recipients }, content) {
    this.data = {
      from: "no-reply@qfeedbacker.com",
      to: this.formatAdresses(recipients),
      subject: subject,
      html: content
    };
  }
  formatAdresses(recipients) {
    return recipients.map(({ email }) => email).join(",");
  }
  async send() {
    const resp = await mailgun.messages().send(this.data);
    return resp;
  }
}

module.exports = MailgunMailer;
