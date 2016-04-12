const {Popover, Button} = Uxcore;

class Demo extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        let overlay = (<div>
            <div className="demoContent">
                <i className="kuma-icon kuma-icon-information"></i> 
                <span>你确认要删除此项数据吗？</span>
            </div>
        </div>);
        return (
            <div>
                <h2>弹出框 Popover</h2>
                <div className="demo-box" style={{marginLeft: 100}}>
                    <div style={{marginLeft: 80}}>
                        <Popover transitionName="flip" placement="topLeft" overlay={overlay} onOk={this.test} showButton={true}>
                        <Button>上左</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="top" showButton={true} overlay={overlay}>
                        <Button>上边</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="topRight" showButton={true} overlay={overlay}>
                        <Button>上右</Button>
                        </Popover>
                    </div>
                    <div style={{width: 60, float: 'left'}}>
                        <Popover transitionName="flip" placement="leftTop" showButton={true} overlay={overlay}>
                        <Button>左上</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="left" showButton={true} overlay={overlay}>
                        <Button>左边</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="leftBottom" showButton={true} overlay={overlay}>
                        <Button>左下</Button>
                        </Popover>
                    </div>
                    <div style={{width: 60, marginLeft: 270}}>
                        <Popover transitionName="flip" placement="rightTop" showButton={true} overlay={overlay}>
                        <Button>右上</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="right" showButton={true} overlay={overlay}>
                        <Button>右边</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="rightBottom" showButton={true} overlay={overlay}>
                        <Button>右下</Button>
                        </Popover>
                    </div>
                    <div style={{marginLeft: 80, clear: 'both'}}>
                        <Popover transitionName="flip" placement="bottomLeft" showButton={true} overlay={overlay}>
                        <Button>下左</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="bottom" showButton={true} overlay={overlay}>
                        <Button>下边</Button>
                        </Popover>
                        <Popover transitionName="flip" placement="bottomRight" showButton={true} overlay={overlay}>
                        <Button>下右</Button>
                        </Popover>
                    </div>
                </div>
            </div>
        )    
    }
}

module.exports = Demo;