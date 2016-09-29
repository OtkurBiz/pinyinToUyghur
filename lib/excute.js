import pinyin from 'pinyin';
import {yinjieToUyghurTable} from './pinyinToUyghurTable';
const chalk = require('chalk');
import parseXlsx from 'excel';
import Excel from 'exceljs';
import Convert from './convert';
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
            
            var workbook = new Excel.Workbook();
            var sheet = workbook.addWorksheet('My Sheet');

            let fullFile = __dirname + '../data/new-data.xlsx';
            console.log(newData);
            

        });
    }
}