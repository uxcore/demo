require('./PageHome.less');

let i18n = require('i18n');
let {Router, Route, Link, IndexRoute} = require('react-router')

let Components = {
    ButtonDemo: require('../../components/button/'),
    ColorDemo: require('../../components/colors/'),
    MessageDemo: require('../../components/message/'),
    StepsDemo: require('../../components/steps/'),
    ProgressDemo: require('../../components/progress/'),
    TooltipDemo: require('../../components/tooltip/'),
    PopoverDemo: require('../../components/popover/'),
    DialogDemo: require('../../components/dialog/'),
    TabsDemo: require('../../components/tabs/'),
    LoadingDemo: require('../../components/loading/'),
    FormDemo: require('../../components/form'),
    TypographyDemo: require('../../components/typography/'),
    GridDemo: require('../../components/grid/'),
    BreadcrumbDemo: require('../../components/breadcrumb/'),
    TagDemo: require('../../components/tags/'),
    TableDemo: require('../../components/table/'),
    CalendarDemo: require('../../components/calendar'),
    SelectDemo: require('../../components/select'),
    PaginationDemo: require('../../components/pagination'),
    SceneDemo: require('../../components/scene')
}


class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <div className="container fn-clear">
                <ul className="sidenav" ref="nav">
                    <li><Link to="/grid">栅格系统</Link></li>
                    <li><Link to="/typography">文字-排版</Link></li>
                    <li><Link to="/colors">颜色</Link></li>
                    <li><Link to="/button">按钮</Link></li>
                    <li><Link to="/message">通用信息</Link></li>
                    <li><Link to="/steps">步骤条</Link></li>
                    <li><Link to="/progress">进度条</Link></li>
                    <li><Link to="/tooltip">浮动提示</Link></li>
                    <li><Link to="/popover">弹出框 Popover</Link></li>
                    <li><Link to="/dialog">对话框 Dialog</Link></li>
                    <li><Link to="/tabs">选项卡</Link></li>
                    <li><Link to="/loading">加载</Link></li>
                    <li><Link to="/form">表单</Link></li>
                    <li><Link to="/breadcrumb">面包屑</Link></li>
                    <li><Link to="/tags">标签</Link></li>
                    <li><Link to="/table">列表</Link></li>
                    <li><Link to="/calendar">日历</Link></li>
                    <li><Link to="/select">选择器</Link></li>
                    <li><Link to="/pagination">翻页</Link></li>
                    <li><Link to="/scene">实际场景</Link></li>
                </ul>
                <div className="content fn-clear" ref="content">{this.props.children}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Route path="/" component={Page}>
            <IndexRoute component={Components.ButtonDemo}></IndexRoute>
            <Route path="grid" component={Components.GridDemo}></Route>
            <Route path="typography" component={Components.TypographyDemo}></Route>
            <Route path="colors" component={Components.ColorDemo}></Route>
            <Route path="button" component={Components.ButtonDemo}></Route>
            <Route path="message" component={Components.MessageDemo}></Route>
            <Route path="steps" component={Components.StepsDemo}></Route>
            <Route path="progress" component={Components.ProgressDemo}></Route>
            <Route path="tooltip" component={Components.TooltipDemo}></Route>
            <Route path="popover" component={Components.PopoverDemo}></Route>
            <Route path="dialog" component={Components.DialogDemo}></Route>
            <Route path="tabs" component={Components.TabsDemo}></Route>
            <Route path="loading" component={Components.LoadingDemo}></Route>
            <Route path="form" component={Components.FormDemo}></Route>
            <Route path="breadcrumb" component={Components.BreadcrumbDemo}></Route>
            <Route path="tags" component={Components.TagDemo}></Route>
            <Route path="table" component={Components.TableDemo}></Route>
            <Route path="calendar" component={Components.CalendarDemo}></Route>
            <Route path="select" component={Components.SelectDemo}></Route>
            <Route path="pagination" component={Components.PaginationDemo}></Route>
            <Route path="scene" component={Components.SceneDemo}></Route>
        </Route>
    </Router>
, document.getElementById('App'));

module.exports = Page;
