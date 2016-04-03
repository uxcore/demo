require('./PageHome.less');

let i18n = require('i18n');
let {Router, Route, Link} = require('react-router')

let Components = {
    ButtonDemo: require('../../components/button/'),
    StepsDemo: require('../../components/steps/'),
    ProgressDemo: require('../../components/progress/')
}


class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <ul className="sidenav">
                    <li><Link to="/button">按钮</Link></li>
                    <li><Link to="/steps">步骤条</Link></li>
                    <li><Link to="/progress">进度条</Link></li>
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
        </Route>
    </Router>
, document.getElementById('App'));

module.exports = Page;
