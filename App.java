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
