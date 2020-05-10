const fs = require('fs');
const fse = require('fs-extra');
const { capitalCase } = require('change-case');
const { lowerCase } = require('lower-case');

const copy = (src, dest, name, isFeatured = false) => {
	fse.copy(src, dest, (err) => {
		if (err) {
			console.error(err);
			process.exit(1);
			return;
		}

		fs.readFile(dest, 'utf8', function (err, data) {
			if (err) {
				console.error(err);
				process.exit(1);
				return;
			}

			let result = data.replace(/{base}/g, `${lowerCase(name)}`);
			result = result.replace(/{Base}/g, `${capitalCase(name)}`);

			if (isFeatured) {
				result = result.replace(/.\/Controllers/g, '');
				result = result.replace(/.\/Services/g, '');
				result = result.replace(/.\/Models/g, '');
			}

			fs.writeFile(dest, result, 'utf8', function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
					return;
				}

				console.log('Created the file');

				return;
			});
		});
	});
};

const argCopy = (src, dest, name, arg, isFeatured = false) => {
	fse.copy(src, dest, (err) => {
		if (err) {
			console.error(err);
			process.exit(1);
			return;
		}

		fs.readFile(dest, 'utf8', function (err, data) {
			if (err) {
				console.error(err);
				process.exit(1);
				return;
			}

			let result = data.replace(/{base}/g, `${lowerCase(name)}`);
			result = result.replace(/{Base}/g, `${capitalCase(name)}`);

			if (arg) {
				result = result.replace(
					/{Middleware, }/g,
					`${lowerCase(arg)}Middleware, `,
				);
				result = result.replace(/--/g, '');
				result = result.replace(/{mwrname}/g, `${lowerCase(arg)}`);
			} else {
				result = result.replace(/{Middleware, }/g, ``);
				result = result.replace(/--.*--/, '');
			}

			if (isFeatured) {
				result = result.replace(/.\/Controllers/g, '');
			}

			fs.writeFile(dest, result, 'utf8', function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
					return;
				}

				console.log('Created the file');
			});
		});
	});
};

module.exports = {
	copy,
	argCopy,
};
