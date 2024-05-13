

const getHomePage = (req, res) => {
    //process data
    //call model
    res.send('hello world');
}

const getTest = (req, res) => {
    //res.send('<h1>Hello duc</h1>')
    res.render('sample.ejs')
}

//xuat nhieu file dung duoi dang object
module.exports = {
    getHomePage,
    getTest
}