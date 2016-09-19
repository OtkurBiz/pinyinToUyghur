import pinyin from 'pinyin';
import {yinjieToUyghurTable} from './pinyinToUyghurTable';
const chalk = require('chalk');

export default class Convert {
    constructor() {

    }

    convertNow(word) {
        let pinyinConfig = {
            heteronym: false,
            segment: true,
            style: pinyin.STYLE_NORMAL
        };

        var allow_char = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;

        if (word.search(allow_char) === -1) {
            return word;
        }

        let wordPinyin = pinyin(word, pinyinConfig);
        let uyghurWord = '';
        //console.log(yinjieToUyghurTable);
        wordPinyin.map(word => {
            uyghurWord += yinjieToUyghurTable[word[0]]
            if (yinjieToUyghurTable[word[0]] == undefined) {
                console.error(chalk.red("there are some words that not in our tabel:", word[0]));
            }
        });
        return uyghurWord;
        //console.log(uyghurWord, wordPinyin, 'key: ' + key);

    }
}