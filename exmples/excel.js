import pinyin from 'pinyin';
import parseXlsx from 'excel';
import Convert from '../index';
import fs from 'fs';

export default class Excute {
    constructor() {
        let convert = new Convert();
        parseXlsx('./data/data.xlsx', (err, data) => {
            if (err) throw err;
            // data is an array of arrays
            data.shift();
            let newData = data.filter(value => {
                if (value[0] != '') return true;
                return false;
            }).map((value, key) => {
                return convert.convertNow(value[0]);
            });
            
            console.log(newData);
            

        });
    }
}