

const getSample = async (req, res) => {
    try {
        // Main Logic 
        res.status(200).json({ message: 'Sample received successfully' });
    } catch (error) {
        console.error(' getSample has error : ', error);
        res.status(500).json({ message: ' Sample get request failed' });
    }
};

module.exports = {
    getSample
};