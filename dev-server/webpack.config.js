const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // 번들링한 결과가 위치할 번들링 파일의 절대 경로
    // publicPath: 'dist'   // 브라우저가 참고할 번들링 결과 파일의 URL 주소를 지정 (CDN을 사용하는 경우 CDN 호스트 지정)
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
  ],
};