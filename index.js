#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const {
	createModel,
	createController,
	createRoute,
	createService,
	complete,
} = require('./logic');

program.version('0.0.1').description('SA-NODE-PROJECT-STRUCTURE');

program
	.command('model')
	.alias('m')
	.description('Model Name')
	.action(() => {
		prompt({
			type: 'input',
			name: 'model',
			message: 'Enter the model name',
		}).then((answer) => createModel(answer.model));
	});

program
	.command('controller')
	.alias('c')
	.description('Controller Name')
	.action(() => {
		prompt({
			type: 'input',
			name: 'controller',
			message: 'Enter the controller name',
		}).then((answer) => createController(answer.controller));
	});

program
	.command('route')
	.alias('r')
	.description('Route Name')
	.action(() => {
		prompt({
			type: 'input',
			name: 'route',
			message: 'Enter the route name',
		}).then((answer) => createRoute(answer.route));
	});

program
	.command('service')
	.alias('s')
	.description('Service Name')
	.action(() => {
		prompt({
			type: 'input',
			name: 'service',
			message: 'Enter the service name',
		}).then((answer) => createService(answer.service));
	});

program
	.command('all')
	.alias('a')
	.description('Root Name of the complete file')
	.action(() => {
		prompt({
			type: 'input',
			name: 'root',
			message: 'Enter the root file name',
		}).then((answer) => complete(answer.root));
	});

program.parse(process.argv);
