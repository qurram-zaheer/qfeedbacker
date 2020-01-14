// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = emails
    .replace(/\s/g, "") // Remove all white space characters (needs to be "greedy" to not stop after finding the first match)
    .replace(/,,+/g, ",") // Remove any surplus commas from anywhere in the string
    .replace(/(^,|,$)/g, "")
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid : ${invalidEmails}`;
  }
};
