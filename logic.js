const fs = require('fs');
const path = require('path');
const { capitalCase } = require('change-case');
const { lowerCase } = require('lower-case');

const { copy, argCopy } = require('./core/file-copy');

const createModel = (model) => {
	!fs.existsSync('Models') && fs.mkdirSync('Models');

	let src = path.join(__dirname, '/templates/Base.js');
	let dest = path.join(process.cwd(), `/Models/${capitalCase(model)}.js`);

	copy(src, dest, model);
};

const createController = (controller) => {
	!fs.existsSync('Controllers') && fs.mkdirSync('Controllers');

	let src = path.join(__dirname, '/templates/base.controller.js');
	let dest = path.join(
		process.cwd(),
		`/Controllers/${lowerCase(controller)}.controller.js`,
	);

	copy(src, dest, controller);
};

const createRoute = (route, mwr) => {
	!fs.existsSync('Routes') && fs.mkdirSync('Routes');

	let src = path.join(__dirname, '/templates/base.route.js');
	let dest = path.join(process.cwd(), `/Routes/${lowerCase(route)}.route.js`);

	argCopy(src, dest, route, mwr);
};

const createService = (service) => {
	!fs.existsSync('Services') && fs.mkdirSync('Services');

	let src = path.join(__dirname, '/templates/base.service.js');
	let dest = path.join(
		process.cwd(),
		`/Services/${lowerCase(service)}.service.js`,
	);

	copy(src, dest, service);
};

const createMiddleware = (middleware) => {
	!fs.existsSync('Middlewares') && fs.mkdirSync('Middlewares');

	let src = path.join(__dirname, '/templates/base.middleware.js');
	let dest = path.join(
		process.cwd(),
		`/Middlewares/${lowerCase(middleware)}.middleware.js`,
	);

	copy(src, dest, middleware);
};

const createFeatureFileStructure = (name) => {
	!fs.existsSync(capitalCase(name)) && fs.mkdirSync(capitalCase(name));

	let modelSource = path.join(__dirname, '/templates/Base.js');
	let controllerSource = path.join(__dirname, '/templates/base.controller.js');
	let routeSource = path.join(__dirname, '/templates/base.route.js');
	let serviceSource = path.join(__dirname, '/templates/base.service.js');
	let middlewareSource = path.join(__dirname, '/templates/base.middleware.js');

	let modelDestination = path.join(
		process.cwd(),
		`/${capitalCase(name)}/${capitalCase(name)}.js`,
	);
	let controllerDestination = path.join(
		process.cwd(),
		`/${capitalCase(name)}/${lowerCase(name)}.controller.js`,
	);
	let routeDestination = path.join(
		process.cwd(),
		`/${name}/${lowerCase(name)}.route.js`,
	);
	let serviceDestination = path.join(
		process.cwd(),
		`/${name}/${lowerCase(name)}.service.js`,
	);
	let middlewareDestination = path.join(
		process.cwd(),
		`/${name}/${lowerCase(name)}.middleware.js`,
	);

	copy(modelSource, modelDestination, name, true);
	copy(controllerSource, controllerDestination, name, true);
	argCopy(routeSource, routeDestination, name, null, true);
	copy(serviceSource, serviceDestination, name, true);
	copy(middlewareSource, middlewareDestination, name, true);
};

const complete = (root, alter = false) => {
	if (alter) {
		createFeatureFileStructure(root);
	} else {
		createModel(root);
		createController(root);
		createRoute(root);
		createService(root);
	}
};

module.exports = {
	createModel,
	createController,
	createRoute,
	createService,
	complete,
	createMiddleware,
};
