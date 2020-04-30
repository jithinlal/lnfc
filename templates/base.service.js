const mongoose = require('mongoose');

const {Base} = require('../Models/{Base}');

exports.get{Base}s = () => {
	return {Base}.find({}, (error, {base}s) => {
		if (error) {
			return error;
		}

		return {base}s;
	});
}

exports.get{Base} = ({base}Id) => {
	const id = mongoose.Types.ObjectId({base}Id);

	return {Base}.findById(id, (error, {base}) => {
		if (error) {
			return error;
		}

		return {base};
	});
};

exports.store{Base} = (data) => {
	const new{Base} = new {Base}({
		...data
	});

	new{Base}.save();

	return new{Base};
};

exports.update{Base} = ({base}Id, data) => {
	const id = mongoose.Types.ObjectId({base}Id);

	return {Base}.findByIdAndUpdate(id, {...data}, (error, {base}) => {
		if (error) {
			return error;
		}

		return {base};
	});
};

exports.delete{Base} = ({base}Id) => {
	const id = mongoose.Types.ObjectId({base}Id);

	return {Base}.findByIdAndDelete(id, (error, result) => {
		if (error) {
			return error;
		}

		return result;
	});
};
