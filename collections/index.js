const newman = require('newman');

newman.run({
    collection: require('./postman_collection.json'),
    environment: require('./postman-env-Dev.json'),
    reporters: "cli"
}, (err, summary) => {
    if (err) {
        throw err;
    }

    console.log("Success", summary);
})