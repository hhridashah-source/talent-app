const languageMiddleware = (req, res, next) => {
  const language = req.headers['accept-language']?.split('-')[0] || req.query.lang || 'en';
  const supportedLanguages = ['en', 'es', 'fr', 'de', 'ja', 'zh', 'hi', 'ar'];

  req.language = supportedLanguages.includes(language) ? language : 'en';
  next();
};

module.exports = languageMiddleware;
