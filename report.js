const newman = require('newman');
 
newman.run({
    //collection: require('./collection/collection.json'),
    collection:'https://api.postman.com/collections/25449148-9648b221-88f4-4fee-b71b-09756c1fc3b9?access_key=PMAT-01GQPAS6ENWFRJE0Q1655X7VAD',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});