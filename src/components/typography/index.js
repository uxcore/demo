class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="typography-demo">
                <h2>文字-排版</h2>
                <h3>字体</h3>
                <div className="demo-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum culpa iste, sequi praesentium, officia dolorem quas incidunt? Sunt reprehenderit quidem fugit quis officiis ad. Tempora possimus necessitatibus quas facere maiores.</p>
                    <p style={{fontSize: 14}}>Quos quidem recusandae veritatis repellendus saepe unde porro neque provident expedita cupiditate in quas sed architecto ipsum quo, cumque ea sunt quasi eligendi eos id dolor? Officia ex, aperiam sequi.</p>
                    <p style={{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum culpa amet, quis dignissimos voluptatibus iste ratione repellendus inventore similique rem labore nihil perspiciatis, sapiente quam expedita, beatae, officiis. Quae, molestiae!</p>
                    <p>去年末起集团内控注意到，各BU陆续出现了数据订正的一些问题案件。其中部分申请修改的是与财务报表相关的数据，甚至出现过某BU的部分底层数据修改后，被后续检查发现底层数据的计算结果与报表数据不一致的问题。</p>
                    <p style={{fontSize: 14}}>集团内控拟定了《阿里巴巴集团数据订正管理规范》（如下所示），希望能规范非技术的数据订正操作、推动前端产品功能改进、降低数据订正发生、提高数据订正的准确性，并同步在推动线上数据订正审批流程。</p><p style={{fontSize: 16}}>目前，本规范已经征求了周明、张瑞、圭多等同学的意见和建议。同时已经联系IDB系统和内外工作流平台，正在将线上审批流与IDB数据订正工单做联动，以确保流程的贯彻执行。</p>
                </div>
                <h3>文字颜色</h3>
                <div className="demo-box">
                    <span className="demo-text demo-text-primary">主要文本</span>
                    <span className="demo-text demo-text-secondary">次要文本</span>
                    <span className="demo-text demo-text-thirdary">辅助文本</span>
                    <span className="demo-text demo-text-disabled">禁用文本</span>
                    <span className="demo-text demo-text-helper">提示文本</span>
                    <span className="demo-text demo-text-ali">阿里橙</span>
                </div>
            </div>
        )
    }
}

module.exports = Demo;