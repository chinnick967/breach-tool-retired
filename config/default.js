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
        },
        "api": {
            "url": env.API_URL ? env.API_URL : "milestone-cs.int.qcgd.net"
        },
        "server": {
            "protocol": env.SERVER_PROTOCOL ? env.SERVER_PROTOCOL : "https",
            "ssl_key": "key.pem",
            "ssl_cert": "key-cert.pem"
        }
};

module.exports = config;
