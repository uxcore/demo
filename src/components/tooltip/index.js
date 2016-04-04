const {Tooltip} = Uxcore;

class Demo extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h2>浮动提示 Tip</h2>
				<div className="demo-box">
					<Tooltip overlay="取自上一个自然日\近7个自然日\近14个自然日各团队在园区平均时长" placement="bottom">
						<span>鼠标hover出现提示</span>
					</Tooltip>
				</div>
				<div className="demo-box">
					<p>讲解：鼠标点击出现提示</p>
					<Tooltip overlay="提示文字" placement="top">
						<span>上</span>
					</Tooltip>
					<Tooltip overlay="提示文字" placement="bottom">
						<span>下</span>
					</Tooltip>
					<Tooltip overlay="提示文字" placement="left">
						<span>左</span>
					</Tooltip>
					<Tooltip overlay="提示文字" placement="right">
						<span>右</span>
					</Tooltip>
				</div>
            </div>
        );
    }
}

module.exports = Demo;