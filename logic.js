const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const { capitalCase } = require('change-case');
const { lowerCase } = require('lower-case');

const createModel = (model) => {
	!fs.existsSync('Models') && fs.mkdirSync('Models');

	let src = path.join(__dirname, '/templates/Base.js');
	let dest = path.join(process.cwd(), `/Models/${capitalCase(model)}.js`);

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

			let result = data.replace(/{base}/g, `${lowerCase(model)}`);
			result = result.replace(/{Base}/g, `${capitalCase(model)}`);

			fs.writeFile(dest, result, 'utf8', function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
					return;
				}

				console.log('Created the model file');
			});
		});
	});
};

const createController = (controller) => {
	!fs.existsSync('Controllers') && fs.mkdirSync('Controllers');

	let src = path.join(__dirname, '/templates/base.controller.js');
	let dest = path.join(
		process.cwd(),
		`/Controllers/${lowerCase(controller)}.controller.js`,
	);

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

			let result = data.replace(/{base}/g, `${lowerCase(controller)}`);
			result = result.replace(/{Base}/g, `${capitalCase(controller)}`);

			fs.writeFile(dest, result, 'utf8', function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
					return;
				}

				console.log('Created the controller file');
			});
		});
	});
};

const createRoute = (route, mwr) => {
	!fs.existsSync('Routes') && fs.mkdirSync('Routes');

	let src = path.join(__dirname, '/templates/base.route.js');
	let dest = path.join(process.cwd(), `/Routes/${lowerCase(route)}.route.js`);

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

			let result = data.replace(/{base}/g, `${lowerCase(route)}`);
			result = result.replace(/{Base}/g, `${capitalCase(route)}`);

			if (mwr) {
				result = result.replace(
					/{Middleware, }/g,
					`${lowerCase(mwr)}Middleware, `,
				);
				result = result.replace(/--/g, '');
				result = result.replace(/{mwrname}/g, `${lowerCase(mwr)}`);
			} else {
				result = result.replace(/{Middleware, }/g, ``);
				result = result.replace(/--.*--/, '');
			}

			fs.writeFile(dest, result, 'utf8', function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
					return;
				}

				console.log('Created the route file');
			});
		});
	});
};

const createService = (service) => {
	!fs.existsSync('Services') && fs.mkdirSync('Services');

	let src = path.join(__dirname, '/templates/base.service.js');
	let dest = path.join(
		process.cwd(),
		`/Services/${lowerCase(service)}.service.js`,
	);

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

			let result = data.replace(/{base}/g, `${lowerCase(service)}`);
			result = result.replace(/{Base}/g, `${capitalCase(service)}`);

			fs.writeFile(dest, result, 'utf8', function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
					return;
				}

				console.log('Created the service file');
			});
		});
	});
};

const createMiddleware = (middleware) => {
	!fs.existsSync('Middlewares') && fs.mkdirSync('Middlewares');

	let src = path.join(__dirname, '/templates/base.middleware.js');
	let dest = path.join(
		process.cwd(),
		`/Middlewares/${lowerCase(middleware)}.middleware.js`,
	);

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

			let result = data.replace(/{base}/g, `${lowerCase(middleware)}`);

			fs.writeFile(dest, result, 'utf8', function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
					return;
				}

				console.log('Created the middleware file');
			});
		});
	});
};

const complete = (root) => {
	createModel(root);
	createController(root);
	createRoute(root);
	createService(root);
};

module.exports = {
	createModel,
	createController,
	createRoute,
	createService,
	complete,
	createMiddleware,
};
