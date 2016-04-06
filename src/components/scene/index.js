require('./scene.less');
const {PrimaryNav, Tabs} = Uxcore;
const {TabPane} = Tabs;
const TabContent1 = require('./tab.content1');
const TabContent2 = require('./tab.content2');

const primaryNavItems = [
    {
        text: '菜单一'
    },
    {
        text: '菜单二'
    },
    {
        text: '菜单三'
    }
];

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <PrimaryNav
            fullWidth={true}
            systemName={'UX Team'}
            primaryNavItems={primaryNavItems}
            selectedKeys={['primary_item_0']} />
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header />
                <Tabs defaultActiveKey="1" style={{marginTop: 20}}>
                    <TabPane tab="表单/列表" key="1"><TabContent1 /></TabPane>
                    <TabPane tab="其它" key="2"><TabContent2 /></TabPane>
                </Tabs>
            </div>
        );
    }
}

module.exports = Demo;