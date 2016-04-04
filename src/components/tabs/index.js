const {Tabs} = Uxcore;
const TabPane = Tabs.TabPane;

class Demo extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>选项卡</h2>
                <h3>大 tab,优先级最高（推荐样式）</h3>
                <div className="demo-box">
                    <Tabs defaultActiveKey="2">
                        <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                        <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                        <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                    </Tabs>
                </div>
                <h3>小（局部）tab</h3>
                <div className="demo-box">
                    <Tabs defaultActiveKey="2" type="small">
                        <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                        <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                        <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                    </Tabs>
                </div>
                <h3>FILTER</h3>
                <div className="demo-box">
                    <Tabs defaultActiveKey="2" type="filter">
                        <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                        <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                        <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                    </Tabs>
                </div>
                <h3>BRICK</h3>
                <div className="demo-box">
                    <Tabs defaultActiveKey="2" type="brick">
                        <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                        <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                        <TabPane tab="tab 3" key="3">选项卡三</TabPane> 
                    </Tabs>
                </div>
                <h3>disabled</h3>
                <div className="demo-box">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                        <TabPane tab="tab 2" disabled={true} key="2">选项卡二</TabPane>
                        <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                    </Tabs>
                </div>
                <h3>tab的嵌套</h3>
                <div className="demo-box">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="tab 1" key="1">
                            <Tabs defaultActiveKey="2" type="filter">
                                <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                                <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                                <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                            </Tabs>
                        </TabPane>
                        <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                        <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                    </Tabs>
                </div>
            </div>    
        );
    }
}

module.exports = Demo;