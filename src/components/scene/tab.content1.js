const {Tabs, Form, Button, Table, Select2, Radiogroup, Validator, Const, Dialog} = Uxcore;
const {Option} = Select2;
const {TabPane} = Tabs;
const RadioItem = Radiogroup.Item;
const {
    InputFormField: Input,
    SelectFormField: Select,
    OtherFormField: Other,
    FormRowTitle,
    FormRow
} = Form;

let columns = [
    { dataKey: 'title', title: '标题', width: 200, message: '只是一个标题'},
    { dataKey: 'money', title: '金额', width: 200, type: 'money', delimiter: ",", ordered: true},
    { dataKey: 'agent', title: "金融机构", width: 200, render: function(cellData, rowData) {
        return <div><a href="javascript:;">{rowData.agent}</a></div>
    }},  
    { dataKey: 'person', title: "申请人", width: 100},
    { dataKey: 'date',title: "日期", width: 150}
];
let renderProps = {
    height: 300,
    pageSize: 5,
    fetchUrl:"http://eternalsky.me:8122/file/getDemo.jsonp",
    jsxcolumns: columns,
    rowSelection: {
        onSelect: function() {
            
        }
    }
};

class TabContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    showDialog() {
        Dialog.success({
            title: '提交表单',
            content: '提交表单啦!'
        });
    }
    
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="2" type="filter">
                    <TabPane tab="筛选1" key="1"></TabPane>
                    <TabPane tab="筛选2" key="2"></TabPane>
                    <TabPane tab="筛选3" key="3"></TabPane>
                    <TabPane tab="筛选4" key="4"></TabPane>
                </Tabs>
                <Form className="scene-form">
                    <FormRow>
                        <Select jsxname="field100" jsxlabel="项目一" jsxdata={{a: '选项1', b: '选项2', c: '选项3'}} />
                        <Select jsxname="field200" jsxlabel="项目二" jsxdata={{a: '选项1', b: '选项2', c: '选项3'}} />
                        <Input jsxname="field300" jsxlabel="项目三" />
                    </FormRow>
                    <FormRow>
                        <Input jsxname="field400" jsxlabel="项目三" />
                        <Input jsxname="field500" jsxlabel="项目三" />
                        <Input jsxname="field600" jsxlabel="项目三" />
                    </FormRow>
                    <Other>
                        <Button onClick={this.showDialog.bind(this)}>提交</Button>
                        <Button type="secondary">重置</Button>
                    </Other>
                </Form>
                <div className="scene-table">
                    <Table {...renderProps} />
                </div>
            </div>
        );
    }
}

module.exports = TabContent;