# webpack-intro

### Entry


webpack으로 묶은 모든 라이브러리들을 로딩할 시작점을 설정하는 지점으로 배열이나 객체 형태로 여러 엔트리 포인트 지정이 가능하다

- 간단한 entry 설정

```javascript
var config = {
    entry: './path/to/my/entry/file.js'
}
```

- 앱 로직용, 외부 라이브러리용

```javascript
// 한번만 빌드 되는 것들을 분리하기 위한 구분
var config = {
    entry: {
        app: './src/app.js',          // app 로직
        vendors: './src/vendors.js'   // 서브파티 라이브러리
    }
}
```

- 페이지당 불러오는 js 설정

```javascript
var config = {
    entry: {
        page1: './src/page1/index.js',
        page2: './src/page2/index.js',
        page3: './src/page3/index.js'
    }
}
```

##### webpack.config.js 예시

- 기본적인 형태

```javascript
module.exports = {
    entry: './app/index.js',        // 배열, 객체 형태도 가능
    output: {                       // 출력 위치
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // 
    }
};
```

- 복수의 엔트리 포인트에 대한 설정 형태

```javascript
module.exports = {
    entry: {
        Profile: './profile.js',
        Feed: './feed.js'
    }, 
    output: {                       
        path: 'build',
        filename: '[name].js'   // 위에 지정한 entry 키의 이름에 맞춰 결과 산출
    }
};

// 번들 Profile.js 를 <script src="build/Profile.js"></script>로 html에 삽입
```
 
---
### Output

entry에서 설정하고 묶은 파일의 결과 값에 대한 설정

```javascript
import { path } from './path';

module.exports = {
    entry: './app/index.js',        
    output: {
        path: path.resolve(__dirname, 'dist'),                       
        filename: 'bundle.js'
        // filename: '[name].js'
    }
};
```
 
##### Output Name options

- name : 엔트리 명에 따른 output 파일명 생성

```javascript
output: { 
    filename: '[name].js',
}
```

- hash : 특정 webpack build에 따른 output 파일명 생성

```javascript
output: { 
    filename: '[hash].js',
}
```

- chunkhash : 특정 webpack chunk에 따른 output 파일명 생성

```javascript
output: { 
    filename: '[chunkhash].js',
}
```




