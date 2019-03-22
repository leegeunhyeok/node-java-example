# node-java-example
Using Java APIs in Node.js example

## 설치 및 실행

- 필요 요구사항
  - Node.js
  - Java JDK + 자바 환경변수

- 테스트 환경
  - Node.js: `v8.12.0`
  - Java JDK: `1.8.0_201`

```bash
# 필요 Node.js 라이브러리 설치
npm install
```

실행
```bash
node app.js
```

## Javascript VS Java

아래 코드는 Node.js 에서 자바 APIs를 사용하는 예제 소스입니다.
```javascript
const java = require('java')
const Thread = java.import('java.lang.Thread')

// JFrame 인스턴스 생성
const frame = java.newInstanceSync('javax.swing.JFrame')
const label = java.newInstanceSync('javax.swing.JLabel')


// JLabel 메소드 사용
// obj.{methodName}() 으로 호출할 경우 비동기방식 (콜백함수나 프라미스를 사용해야함)
// obj.{methodName}Sync() 로 호출할 경우 동기방식
label.setTextSync('반갑습니다~')
label.setBoundsSync(120, 125, 100, 50)
label.setHorizontalAlignmentSync(
  java.getStaticFieldValue('javax.swing.JLabel', 'CENTER')
)


// JFrame 메소드 사용
frame.setTitleSync('Using java APIs in Node.js')
frame.setSizeSync(400, 300)
frame.setResizableSync(false)
frame.setDefaultCloseOperationSync(
  java.getStaticFieldValue('javax.swing.JFrame', 'EXIT_ON_CLOSE')
)
frame.addSync(label)
frame.setVisibleSync(true)


for (let i = 1; ; i++) {
  try {
    Thread.sleepSync(500)
  } catch (e) {
    break;
  }
  label.setTextSync('반갑습니다~ x' + i)
}
```

위의 자바스크립트 코드는 아래의 자바코드와 동일한 결과를 보여줍니다.
```java
import java.lang.Thread;
import javax.swing.JFrame;
import javax.swing.JLabel;

class App {

  private App() {
    // JFrame 생성
    JFrame frame = new JFrame();

    // JLabel 생성
    JLabel label = new JLabel("반갑습니다~");

    // 화면에 배치할 위치 지정 및 텍스트 가운데정렬
    label.setBounds(120, 125, 100, 50);
    label.setHorizontalAlignment(JLabel.CENTER);

    // JFrame 타이틀, 크기 등 설정
    frame.setTitle("Using java APIs in Node.js");
    frame.setSize(400, 300);
    frame.setResizable(false);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.add(label);
    frame.setVisible(true);

    // 계속 반복하며 JLabel 텍스트 변경 (0.5초 마다 한 번)
    for (int i = 1; ; i++) {
      try {
        Thread.sleep(500);
      } catch(InterruptedException e) {
        break;
      }
      label.setText("반갑습니다~ x" + i);
    }
  }

  public static void main(String[] args) {
    new App();
  }
}
```

## 문제해결

### MSBUILD : error MSB3428
- Powershell 관리자 권한에서 아래 명령어 입력

```bash
npm install --global --production windows-build-tools
```

- ※ Successfully installed Python 2.7 문구가 나와도 종료된것이 아님.
- 오래 걸리니 기다려야 함