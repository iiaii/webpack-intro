var path = require('path');

module.exports = {
    // webpack으로 묶은 모든 라이브러리들을 로딩할 시작점 설정
    entry: './app/index.js',        // 배열, 객체 형태도 가능
    output: {                       // 출력 위치
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};