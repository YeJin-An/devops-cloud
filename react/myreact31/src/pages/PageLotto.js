class pageLotto extends Component {
  constructor(props) {
    // constructor() 컴포넌트의 초기화
    super(props);
    this.state = {
      Subject: { title: "WEB", sub: "월드와이드웹!" },
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.statw.subject.title}
          // 중괄호를 통해 State값을 가져온다.
          sub={this.state.subject.sub}
        ></Subject>
      </div>
    );
  }
}

// 캡슐화를 통해 코드를 리펙토링 하는 것이 좋은 사용성을 만드는 핵심
