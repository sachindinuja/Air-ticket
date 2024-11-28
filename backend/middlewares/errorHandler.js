const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Check if the error is a validation error (e.g., Mongoose validation error)
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validation Error',
            errors: err.errors,
        });
    }

    // Check if the error is a MongoDB error
    if (err.name === 'MongoError') {
        return res.status(500).json({
            message: 'Database Error',
            error: err.message,
        });
    }

    // General error handler for all other types of errors
    return res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
    });
};

module.exports = errorHandler;
