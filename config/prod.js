// module.exports = {
//   mongoURI:
//     "mongodb+srv://qurram:i9WhIiB8ivBNX0xx@cluster0-4eu2v.mongodb.net/test?retryWrites=true&w=majority",
//   googleClientID:
//     "268329542420-bu46m7o20sbt0cqnn6krarcj9mbugmb5.apps.googleusercontent.com",
//   googleClientSecret: "DXpYkljZfOFE06vJheVhNEtL"
// };

module.exports = {
  mongoURI: process.env.MONGO_URI,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY
};
