const {base}Service = require('../Services/{base}.service');

exports.get{Base}s = async (req, res, next) => {
	try {
		const result = await {base}Service.get{Base}s();
	} catch (error) {
		next(error);
		res.status(500).json({
			success: false
		});
	}
}

exports.get{Base} = async (req, res, next) => {
	try {
		const result = await {base}Service.get{Base}();
	} catch (error) {
		next(error);
		res.status(500).json({
			success: false
		});
	}
}

exports.store{Base} = async (req, res, next) => {
	try {
		const result = await {base}Service.store{Base}();
	} catch (error) {
		next(error);
		res.status(500).json({
			success: false
		});
	}
}

exports.update{Base} = async (req, res, next) => {
	try {
		const result = await {base}Service.update{Base}();
	} catch (error) {
		next(error);
		res.status(500).json({
			success: false
		});
	}
}

exports.delete{Base} = async (req, res, next) => {
	try {
		const result = await {base}Service.delete{Base}();
	} catch (error) {
		next(error);
		res.status(500).json({
			success: false
		});
	}
}
