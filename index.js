let express = require('express');
let app = express();
let path = require('path');
let real_path = path.join(__dirname + '/public');
app.use(express.static(real_path));
app.listen(8000);