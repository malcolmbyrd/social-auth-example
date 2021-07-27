module.exports = {
  'facebookAuth' : {
    'clientID' : '1345755175819299',
    'clientSecret' : 'e59acd9fb8c9f5b66bd2b8c85f5cbb97',
    'callbackURL' : 'http://localhost:4000/api/auth/facebook/callback',
    'profileURL' : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
  },
  'twitterAuth' : {
    'consumerKey' : '',
    'consumerSecret' : '',
    'callbackURL' : 'http://localhost:4000/api/auth/twitter/callback',
  },
  'googleAuth' : {
    'clientID' : '',
    'clientSecret' : '',
    'callbackURL' : 'http://localhost:4000/api/auth/google/callback'
  },
}