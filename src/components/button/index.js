const {Button} = Uxcore;

class ButtonDemo extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h2>按钮 Button</h2>
                <h3>标准样式</h3>
                <div className="demo-box"> 
                    <Button type="primary">primary</Button>
                    <Button type="secondary">secondary</Button>
                    <Button type="outline">outline</Button>
                </div>
                <h3>不同尺寸</h3>
                <div className="demo-box">
                    <Button size="large">large</Button>
                    <Button size="medium">medium</Button>
                    <Button size="small">small</Button>
                </div>
            </div>
        )
    }
}

module.exports = ButtonDemo;