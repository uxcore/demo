const {Steps} = Uxcore;
const Step = Steps.Step;

let steps = [{
    title: '已完成',
    description: '这里是多信息的描述啊'
}, {
    title: '进行中',
    description: '这里是多信息的耶哦耶哦哦耶哦耶'
}, {
    title: '又一个待运行',
    description: '描述啊描述啊'
}, {
    title: '再一个待运行',
    description: '描述啊描述啊'
}, {
    title: '待运行',
    description: '这里是多信息的描述啊'
}];

class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            current: 0,
            showIcon: true,
            steps: steps,
            show: true,
            direction: '',
            showDesc: true
        };
    }

    toggleNumberShow(){
        this.setState({
            showIcon: !this.state.showIcon
        });
    }

    changeItem() {
        this.setState({
            steps: [{
                title: '已完成',
                description: '这里是多信息的描述啊'
            }, {
                title: '进行中',
                description: '这里是多信息的耶哦耶哦哦耶哦耶耶哦耶哦哦耶哦耶'
            }, {
                title: '又一个待运行',
                description: '描述啊描述啊'
            },{
                title: '已完成',
                description: '这里是多信息的描述啊'
            },{
                title: '又一个待运行',
                description: '描述啊描述啊'
            },{
                title: '已完成',
                description: '这里是多信息的描述啊'
            },{
                title: '已完成',
                description: '这里是多信息的描述啊'
            }]
        })
    }
    
    toggleDescription(){
        this.setState({
            showDesc: !this.state.showDesc
        });
    }

    next() {
        var s = this.state.current + 1;
        if (s === this.state.steps.length) {
            s = 0;
        }
        this.setState({
            current: s
        });
    }

    toggleDirection(){
        this.setState({
            direction: this.state.direction === 'vertical' ? '': 'vertical'
        });
    }

    render() {
        let showDesc = this.state.showDesc;
        return (
            <div>
                <h2>步骤条</h2>
                <h3>横向步骤条(标准)</h3>
                <div className="demo-box">
                    <Steps current="3" showIcon={true}>
                        <Step key={0} title={'步骤一'} />
                        <Step key={1} title={'步骤二'} />
                        <Step key={2} title={'步骤三'} />
                        <Step key={3} title={'步骤四'} />
                        <Step key={4} title={'已完成'} />
                    </Steps>
                </div>
                <div className="demo-box">
                    <Steps current="5" showIcon={true}>
                        <Step key={0} title={'步骤一'} />
                        <Step key={1} title={'步骤二'} />
                        <Step key={2} title={'步骤三'} />
                        <Step key={3} title={'步骤四'} />
                        <Step key={4} title={'已完成'} />
                    </Steps>
                </div>
                <div className="demo-box">
                    <Steps current="3" showIcon={false}>
                        <Step key={0} title={'步骤一'} />
                        <Step key={1} title={'步骤二'} />
                        <Step key={2} title={'步骤三'} />
                        <Step key={3} title={'步骤四'} />
                        <Step key={4} title={'已完成'} />
                    </Steps>
                </div>
                <h3>横向步骤条(样式二)</h3>
                <div className="demo-box" style={{marginTop: 70}}>
                    <Steps current="3" showIcon={true}>
                        <Step key={0} title={'步骤一'} description="内容文案内容文案内容文案内容文案" />
                        <Step key={1} title={'步骤二'} description="内容文案内容文案内容文案内容文案" />
                        <Step key={2} title={'步骤三'} description="内容文案内容文案内容文案内容文案" />
                        <Step key={3} title={'步骤四'} description="内容文案内容文案内容文案内容文案" />
                        <Step key={4} title={'已完成'} description="内容文案内容文案内容文案内容文案" />
                    </Steps>
                </div>
                <h3>显示时间的步骤条</h3>
                <div className="demo-box">
                    <Steps current="3" showIcon={true} type="title-on-top">
                        <Step key={0} title={'步骤一'} description="2016-1-12" />
                        <Step key={1} title={'步骤二'} description="2016-1-13" />
                        <Step key={2} title={'步骤三'} description="2016-1-14" />
                        <Step key={3} title={'步骤四'} description="2016-1-15" />
                        <Step key={4} title={'已完成'} description="2016-1-16" />
                    </Steps>
                </div>
                <h3>大量文案描述的步骤条</h3>
                <div className="demo-box">
                    <Steps current="3" showIcon={true} type="long-desc">
                        <Step key={0} title={'步骤一'} description="这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案" />
                        <Step key={1} title={'步骤二'}  description="这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案" />
                        <Step key={2} title={'步骤三'}  description="这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案" />
                        <Step key={3} title={'步骤四'}  description="这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案" />
                        <Step key={4} title={'已完成'}  description="这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案这里是说明文案" />
                    </Steps>
                </div>
                <h3>纵向步骤条</h3>
                <div className="demo-box">
                    <Steps current="3" showIcon={true} direction="vertical">
                        <Step key={0} title={'步骤一'} description="这里是说明文案" />
                        <Step key={1} title={'步骤二'} description="这里是说明文案" />
                        <Step key={2} title={'步骤三'} description="这里是说明文案" />
                        <Step key={3} title={'步骤四'} description="这里是说明文案" />
                        <Step key={4} title={'已完成'} description="这里是说明文案" />
                    </Steps>
                </div>
            </div>
        );
    }
}

module.exports = Demo;