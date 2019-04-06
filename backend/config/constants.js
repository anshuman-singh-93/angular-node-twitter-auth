module.exports = {
    PORT: process.env.PORT || 3000,
    FRONT_END_URL: process.env.FRONT_END_URL || 'http://localhost:4200',
    SESSION_SECRET: process.env.SESSION_SECRET,
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    MONGO_HOSTNAME: process.env.MONGO_HOSTNAME,
    MONGO_PORT: process.env.MONGO_PORT || 33086,
    TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
    TWITTER_CALLBACK_URL: process.env.TWITTER_CALLBACK_URL,
    JWT_SECRET: process.env.JWT_SECRET


}