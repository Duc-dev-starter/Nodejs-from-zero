const path = require('path');
const express = require('express')

const configViewEngine = (app) => {
    //config template engine
    app.set('views', path.join("./src", 'views'))
    app.set('view engine', 'ejs')

    //config static file: images/css/js
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;

//Static file trong ExpressJS được sử dụng để phục vụ các tệp tin như hình ảnh, file CSS, JavaScript, và các tài nguyên khác mà không cần xử lý bởi máy chủ. . Điều này giúp tăng tốc độ tải trang web bởi vì không cần phải thực hiện bất kỳ xử lý nào trên các tệp tin này
//, và chúng cũng giúp giảm tải cho máy chủ bởi vì máy chủ không cần phải tạo ra hoặc xử lý lại các tệp tin này mỗi khi có yêu cầu.