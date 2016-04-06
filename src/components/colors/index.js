class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>颜色</h2>
                <h3>BRAND COLOR</h3>
                <div className="demo-box">
                    <div className="color B1_1">B1/2_1</div>
                    <div className="color B1_3">B1/2_3</div>
                </div>
                <h3>BRAND COLOR EVOLUTION</h3>
                <div className="demo-box">
                    <div className="color B1_1_D">B1_1/D</div>
                    <div className="color B1_1_L">B1_1/L</div>
                    <div className="color B1_1_LL">B1_1/LL</div>
                </div>
                <h3>NEUTRAL COLOR</h3>
                <div className="demo-box">
                    <div className="color N1_1">N1_1</div>
                    <div className="color N1_2">N1_2</div>
                    <div className="color N1_3">N1_3</div>
                    <div className="color N1_4">N1_4</div>
                    <div className="color N1_5">N1_5</div>
                    <div className="color N1_6">N1_6</div>
                    <div className="color N1_7">N1_7</div>
                    <div className="color N2_1">N2_1</div>
                    <div className="color N2_2">N2_2</div>
                    <div className="color N2_3">N2_3</div>
                    <div className="color N2_4">N2_4</div>
                </div>
                <h3>FUNCTIONAL COLOR</h3>
                <div className="demo-box">
                    <div className="color F1_1">F1_1</div>
                    <div className="color F1_2">F1_2</div>
                    <div className="color F2_1">F2_1</div>
                    <div className="color F2_2">F2_2</div>
                    <div className="color F3_1">F3_1</div>
                    <div className="color F3_2">F3_2</div>
                    <div className="color F4_1">F4_1</div>
                    <div className="color F4_2">F4_2</div>
                    <div className="color F5_1">F5_1</div>
                    <div className="color F5_2">F5_2</div>
                </div>
                <h2>LINK</h2>
                <div className="demo-box">
                    <a href="http://ux.alibaba.net/" className="link-demo">This is a link</a><br/>
                    <a href="http://ux.alibaba.net/" className="link-demo">这是一个链接</a>
                </div>
            </div>    
        );
    }
}

module.exports = Demo;