exports.{base}Middleware = async (req, res, next) => {
	try {
		// middleware condition goes here!!!
		const check = true;

		if (!check) {
			throw new Error('You are not authorized');
		}

		next();
	} catch (error) {
		next(error);
	}
}