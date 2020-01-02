/**
 * Screenshots.js
 *
 * This file generates the screenshots for desktop
 * for the demos, included in the `demos.json` file.
 *
 * Usage:
 * 	$ npm run generate
 *
 * @author Carlos Abraham Hernandez
 */
const path = require('path');
const Pageres = require('pageres');
const isReachable = require('is-reachable');

/**
 * List of demos websites.
 */
const demos = require('../demos.json');

/**
 * Desktop size.
 */
const size = '1200x700';

demos.forEach(async demo => {
	const reachable = await isReachable(demo.url);

	if (reachable) {
		await new Pageres()
			.src(demo.url, [size], {crop: true, filename: demo.name})
			.dest(path.join(__dirname, '..', 'screenshots'))
			.run();
	}
});
