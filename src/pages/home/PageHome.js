require('./PageHome.less');

let i18n = require('i18n');
let {Router, Route, Link} = require('react-router')

let Components = {
    ButtonDemo: require('../../components/button/'),
    StepsDemo: require('../../components/steps/'),
    ProgressDemo: require('../../components/progress/'),
    TooltipDemo: require('../../components/tooltip/'),
    PopoverDemo: require('../../components/popover/'),
    DialogDemo: require('../../components/dialog/'),
    TabsDemo: require('../../components/tabs/'),
    LoadingDemo: require('../../components/loading/'),
}


class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container">
                <ul className="sidenav">
                    <li><Link to="/button">按钮</Link></li>
                    <li><Link to="/steps">步骤条</Link></li>
                    <li><Link to="/progress">进度条</Link></li>
                    <li><Link to="/tooltip">浮动提示</Link></li>
                    <li><Link to="/popover">弹出框 Popover</Link></li>
                    <li><Link to="/dialog">对话框 Dialog</Link></li>
                    <li><Link to="/tabs">选项卡</Link></li>
                    <li><Link to="/loading">加载</Link></li>
                </ul>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Route path="/" component={Page}>
            <Route path="button" component={Components.ButtonDemo}></Route>
            <Route path="steps" component={Components.StepsDemo}></Route>
            <Route path="progress" component={Components.ProgressDemo}></Route>
            <Route path="tooltip" component={Components.TooltipDemo}></Route>
            <Route path="popover" component={Components.PopoverDemo}></Route>
            <Route path="dialog" component={Components.DialogDemo}></Route>
            <Route path="tabs" component={Components.TabsDemo}></Route>
            <Route path="loading" component={Components.LoadingDemo}></Route>
        </Route>
    </Router>
, document.getElementById('App'));

module.exports = Page;
