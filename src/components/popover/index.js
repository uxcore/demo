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
                        <Popover placement="topLeft" overlay={overlay} onOk={this.test} showButton={true}>
                        <Button>上左</Button>
                        </Popover>
                        <Popover placement="top" showButton={true} overlay={overlay}>
                        <Button>上边</Button>
                        </Popover>
                        <Popover placement="topRight" showButton={true} overlay={overlay}>
                        <Button>上右</Button>
                        </Popover>
                    </div>
                    <div style={{width: 60, float: 'left'}}>
                        <Popover placement="leftTop" showButton={true} overlay={overlay}>
                        <Button>左上</Button>
                        </Popover>
                        <Popover placement="left" showButton={true} overlay={overlay}>
                        <Button>左边</Button>
                        </Popover>
                        <Popover placement="leftBottom" showButton={true} overlay={overlay}>
                        <Button>左下</Button>
                        </Popover>
                    </div>
                    <div style={{width: 60, marginLeft: 270}}>
                        <Popover placement="rightTop" showButton={true} overlay={overlay}>
                        <Button>右上</Button>
                        </Popover>
                        <Popover placement="right" showButton={true} overlay={overlay}>
                        <Button>右边</Button>
                        </Popover>
                        <Popover placement="rightBottom" showButton={true} overlay={overlay}>
                        <Button>右下</Button>
                        </Popover>
                    </div>
                    <div style={{marginLeft: 80, clear: 'both'}}>
                        <Popover placement="bottomLeft" showButton={true} overlay={overlay}>
                        <Button>下左</Button>
                        </Popover>
                        <Popover placement="bottom" showButton={true} overlay={overlay}>
                        <Button>下边</Button>
                        </Popover>
                        <Popover placement="bottomRight" showButton={true} overlay={overlay}>
                        <Button>下右</Button>
                        </Popover>
                    </div>
                </div>
            </div>
        )    
    }
}

module.exports = Demo;