const {Alert, Message, Button} = Uxcore;

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleClick(type) {
        Message[type](type, 3);
    }
    
    render(){
        return (
            <div>
                <h2>通用信息 Message</h2>
                <h3>页面提示</h3>
                <div className="demo-box">
                    <Alert message={'提示信息，用户知道即可'} type="message" hasContainer={true}/>
                    <br />
                    <Alert message={'失败的提示信息'} type="error" hasContainer={true}/>
                    <br />
                    <Alert message={'警告的提示信息'} type="warning" hasContainer={true}/>
                    <br />
                    <Alert message={'成功的提示信息'} type="success" hasContainer={true}/>
                    <br />
                    <Alert message={'疑问的提示信息，需要用户去操作的'} type="question" hasContainer={true}/>
                    <br />
                    <Alert ref="alert" message={' 这是一个 message'} type="message" closable={true} />
                </div>
                <h3>操作反馈</h3>
                <div className="demo-box">
                    <Button onClick={this.handleClick.bind(this, 'success')}>显示成功提示</Button>
                    <Button onClick={this.handleClick.bind(this, 'info')}>显示普通提示</Button>
                    <Button onClick={this.handleClick.bind(this, 'error')}>显示错误提示</Button>
                    <Button onClick={this.handleClick.bind(this, 'loading')}>显示加载提示</Button>
                </div>
            </div>
        );
    }
}

module.exports = Demo;