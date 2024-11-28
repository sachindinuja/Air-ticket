const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Validation Error', errors: err.errors });
    }

    if (err.name === 'MongoError') {
        return res.status(500).json({ message: 'Database Error', error: err.message });
    }

    res.status(500).json({ message: 'Internal Server Error', error: err.message });
};

module.exports = errorHandler;
