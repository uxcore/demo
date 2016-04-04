const {Progress, Button} = Uxcore;
const {Line, Circle} = Progress;

class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            percent: 0
        };
    }

    increase() {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }
    decline() {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }

    render() {
        return (
            <div>
                <h2>进度条</h2>
                <h3>标准的进度条</h3>
                <div className="demo-box">
                    <Line percent={30} />
                    <Line percent={70} status="exception" />
                    <Line percent={100} />
                    <Line percent={50} showInfo={false} />
                    <Circle percent={30} />
                    <Circle percent={70} status="exception" />
                    <Circle percent={100} status="success" />
                    <Circle percent={50} showInfo={false} />
                </div>
                <h3>适合放在较狭窄的区域内。</h3>
                <div className="demo-box" style={{ width: 170 }}>
                    <Line percent={30} strokeWidth={5} />
                    <Line percent={70} strokeWidth={5} status="exception" />
                    <Line percent={100} strokeWidth={5} />
                </div>
                <h3>动态展示。</h3>
                <div className="demo-box">
                    <Line percent={this.state.percent} />
                    <Circle percent={this.state.percent} />
                    <Button type="secondary" size="small" onClick={this.decline.bind(this)}>
                        <i className="kuma-icon kuma-icon-stop"></i>
                    </Button>
                    <Button type="secondary" size="small" onClick={this.increase.bind(this)}>
                        <i className="kuma-icon kuma-icon-follow"></i>
                    </Button>
                </div>
            </div>
        );
    }
};

module.exports = Demo;