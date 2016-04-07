const {Dialog, Button} = Uxcore;
const Confirm = Dialog.confirm;

function info() {
  Dialog.info({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息',
    locale: 'en-us',
    onOk: function() {}
  });
}

function success() {
  Dialog.success({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息'
  });
}

function error() {
  Dialog.error({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息'
  });
}

function showConfirm(){
    Confirm({
        title: '您是否确认要删除这项内容',
        content: '一些解释',
        onOk: function() {
                alert('确定');
        },
        onCancel: function() {}
    });
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    showDialog(){
        this.setState({
            visible: true
        });
    }
    handleOk() {
		this.setState({
            visible: false
		});
	}
	handleCancel() {
		this.setState({
            visible: false
		});
	}
    render() {
        return (
            <div>
                <h2>对话框 Dialog</h2>
                <h3>扩展类弹出框</h3>
                <div className="demo-box">
                    <Button type="secondary" size="small" type="secondary" size="small" onClick={this.showDialog.bind(this)}>弹框</Button>
                    <Dialog
                        title={'创建群'}
                        transitionName="threeFallV"
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this)}
					    onCancel={this.handleCancel.bind(this)}>
                        <p>对话框的内容</p>
                        <p>对话框的内容</p>
                        <p>对话框的内容</p>
                    </Dialog>
                </div>
                <h3>确认对话框</h3>
                <div className="demo-box">
                    <Button type="secondary" size="small" onClick={showConfirm}>确认对话框</Button>
                </div>
                <h3>提示对话框</h3>
                <div className="demo-box">
                    <Button type="secondary" size="small" onClick={info}>信息提示</Button>
                    <Button type="secondary" size="small" onClick={success}>成功提示</Button>
                    <Button type="secondary" size="small" onClick={error}>失败提示</Button>
                </div>
            </div>
        )
    }
} 

module.exports = Demo;