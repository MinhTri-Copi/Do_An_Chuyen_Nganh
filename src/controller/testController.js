const helloWorld = (req, res) => {
    // Render trang chủ với view engine EJS
    res.render('home');
};

module.exports = {
    helloWorld,
};