let app = require('./app'); // eslint-disable prefer-const

const thePort = process.env.PORT || 3000;

app.listen(thePort, () => {
	console.log(`Your app is listening on port ${thePort} 8-)`);
});
