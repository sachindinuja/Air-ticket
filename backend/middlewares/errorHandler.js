const errorHandler = (err, req, res, next) => {
    console.error(err.stack);  // Logs the error stack to the console for debugging purposes

    // Check if the error is a validation error (e.g., Mongoose validation error)
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validation Error',
            errors: err.errors,  // Sends the validation error details
        });
    }

    // Check if the error is a MongoDB error
    if (err.name === 'MongoError') {
        return res.status(500).json({
            message: 'Database Error',
            error: err.message,  // Sends the error message from MongoDB
        });
    }

    // General error handler for all other types of errors
    return res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,  // Sends a general error message
    });
};

module.exports = errorHandler;
