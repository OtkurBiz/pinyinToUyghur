'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pinyin = require('pinyin');

var _pinyin2 = _interopRequireDefault(_pinyin);

var _pinyinToUyghurTable = require('./pinyinToUyghurTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chalk = require('chalk');

var Convert = function () {
    function Convert() {
        _classCallCheck(this, Convert);
    }

    _createClass(Convert, [{
        key: 'convertNow',
        value: function convertNow(word) {
            var pinyinConfig = {
                heteronym: false,
                segment: true,
                style: _pinyin2.default.STYLE_NORMAL
            };

            var allow_char = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;

            if (word.search(allow_char) === -1) {
                return word;
            }

            var wordPinyin = (0, _pinyin2.default)(word, pinyinConfig);
            var uyghurWord = '';
            //console.log(yinjieToUyghurTable);
            wordPinyin.map(function (word) {
                uyghurWord += _pinyinToUyghurTable.yinjieToUyghurTable[word[0]];
                if (_pinyinToUyghurTable.yinjieToUyghurTable[word[0]] == undefined) {
                    console.error(chalk.red("there are some words that not in our tabel:", word[0]));
                }
            });
            return uyghurWord;
            //console.log(uyghurWord, wordPinyin, 'key: ' + key);
        }
    }]);

    return Convert;
}();

exports.default = Convert;