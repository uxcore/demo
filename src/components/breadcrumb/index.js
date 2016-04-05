const {Crumb} = Uxcore;

class Demo extends  React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <h2>面包屑</h2>
            <div className="demo-box">
                <Crumb className="crumb-style crumb-root">
                    <Crumb.Item href="#" className="crumb-item-style">首页</Crumb.Item>
                    <Crumb.Item href="#">管理平台</Crumb.Item>
                    <Crumb.Item href="#">流程管理</Crumb.Item>
                    <Crumb.Item className="crumb-item-style">编辑流程信息</Crumb.Item>
                </Crumb>
            </div>
        </div>)
    }
}

module.exports = Demo;