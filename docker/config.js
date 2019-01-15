var config = {}, env = process.env;

config[env.NODE_ENV] = {
        "mongo": {
            "url": env.MONGO_URL
        },
        "adminUser": {
            "email": env.ADMINUSER_EMAIL,
            "password": env.ADMINUSER_PASSWORD
        },
        "bcrypt": {
            "salt": env.BCRYPT_SALT
        }
};

module.exports = config;
