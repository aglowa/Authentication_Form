dbPassword = 'mongodb+srv://login' + encodeURIComponent('password') + '@DBNAME-ynubr.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};