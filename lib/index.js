import Express  from 'express';
import Convert from './convert';
import parseXlsx from 'excel';
import Excel from 'exceljs';

let app = Express();

app.get('/', (req, res) => {

    res.send('hello word');
})

app.listen(4321, () => {
    console.log('server running on http://localhost:4321');
    console.log(buildXlsx, 'buildXlsx');
})