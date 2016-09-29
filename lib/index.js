import Express  from 'express';
import Convert from './convert';
import parseXlsx from 'excel';
import Excel from 'exceljs';
import Excute from './excute';
let app = Express();

app.get('/', (req, res) => {

    res.send('hello word');
})

app.listen(4321, () => {
    //new Excute();
    let convert = new Convert();
    console.log(convert.convertNow('中国'));
    console.log('server running on http://localhost:4321');
})