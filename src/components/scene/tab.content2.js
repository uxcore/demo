const {Tabs, Steps, Progress, Alert, Calendar, Dialog, Button} = Uxcore;
const {TabPane} = Tabs;
const {Step} = Steps;
const {Line, Circle} = Progress;

let items = [{
    text: '条件一',
    value: 1,
    checked: true
}, {
    text: '条件二',
    value: 2
}, {
    text: '条件三',
    value: 3
}];

class TabContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            percent: 0,
            value: '2016-04-01',
            dialogVisible: false
        };
    }
    
    onSelect(value) {
        this.setState({
            value: value
        });
    }
    
    toggleDialog() {
        this.setState({
            dialogVisible: !this.state.dialogVisible
        });
    }
    
    closeDialog() {
        this.setState({
            dialogVisible: false
        });
    }
    
    componentDidMount() {
        setInterval(function(){
            this.setState({
                percent: this.state.percent >= 100 ? 0: this.state.percent + 10,
                step: this.state.step === 4 ? 0: this.state.step + 1
            });
        }.bind(this), 1000);
    }
    
    render() {
        return (
            <div className="fn-clear scene-content-2">
                <Alert message={'如何打造最好的UX组件'} type="question" hasContainer={true}/>
                <div className="scene-brick" style={{paddingBottom: 30}}>
                    <Steps current={this.state.step} showIcon={true}>
                        <Step key={0} title={'步骤一'} />
                        <Step key={1} title={'步骤二'} />
                        <Step key={2} title={'步骤三'} />
                        <Step key={3} title={'步骤四'} />
                        <Step key={4} title={'已完成'} />
                    </Steps>
                </div>
                <div className="scene-brick scene-progress-circle">
                    <Circle percent={this.state.percent} size="100" />
                </div>
                <div className="scene-brick scene-progress-circle">
                    <Circle percent={this.state.percent} size="100" status="success" />
                </div>
                <div className="scene-brick scene-progress-circle">
                    <Circle percent={this.state.percent} size="100" status="exception" />
                </div>
                <div className="scene-brick scene-progress-line">
                    <Line percent={30} />
                    <Line percent={70} status="exception" />
                    <Line percent={100} />
                    <Line percent={50} showInfo={false} />
                </div>
                <div className="scene-brick">
                    <Calendar locale="en-us" value={this.state.value} onSelect={this.onSelect.bind(this)} />
                </div>
                <div className="scene-brick">
                    <Button type="outline" onClick={this.toggleDialog.bind(this)}>弹框DEMO</Button>
                    <Dialog
                        title={'创建群'}
                        onOK={this.closeDialog.bind(this)}
                        onCancel={this.closeDialog.bind(this)}
                        visible={this.state.dialogVisible}>
                        <p>对话框的内容</p>
                        <p>对话框的内容</p>
                        <p>对话框的内容</p>
                    </Dialog>
                </div>
            </div>
        );
    }
}

module.exports = TabContent;