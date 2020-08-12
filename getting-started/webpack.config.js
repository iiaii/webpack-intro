var path = require('path');

module.exports = {
    entry: './app/index.js',        // 배열, 객체 형태도 가능
    output: {                       // 출력 위치
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};