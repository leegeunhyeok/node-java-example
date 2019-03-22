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
