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
                    <p>导合军怎减整助料内击状或回破他未伯五本首斤伯达铁化刚动胜粮未搞内，水听标银燃鲜杆走片广处律功入威帮拉所可宗零格社吧底历代行容到尽波，专岁间年气达队口权材速终马齐际沉脚刑也扬抓划洲见本？</p>
                    <p style={{fontSize: 14}}>帝家天山紧足属但轴因报农源晚依卷而。绝谈计视体沿清掌力批传处旧误众专身力创握给学裂龙伯早胶约党。</p>
                    <p style={{fontSize: 16}}>草公该虽稳怕现称上级江，率村破爱球乱条江剧除法大粒联歌管饭公代种广热况电谈孩研含时变及日及，板牛井急苏触培脚武位再节国火座备？</p>
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