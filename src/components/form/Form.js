/* 
* @Author: ens
* @Date:   2015-08-28 13:24:25
* @Last Modified by:   caoke
* @Last Modified time: 2015-11-26 22:43:24
*/

require('./Form.less');

let reactMixin = require('react-mixin');
let Store = require('./store');
let Actions = require('./actions');
let {Form, Button} = Uxcore;
let {
    InputFormField: Input,
    SelectFormField: Select,
    OtherFormField: Other,
    FormRowTitle,
    FormRow
} = Form;

class FormDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        var t = this;
        return (
            <div className="form">
                <h2>表单</h2>
                <Form className="form1">
                    <FormRowTitle jsxtitle="横排" />
                    <Select jsxname="field1" jsxlabel="项目一" jsxdata={{a: '选项1', b: '选项2', c: '选项3'}} />
                    <Select jsxname="field2" jsxlabel="项目二" jsxdata={{a: '选项1', b: '选项2', c: '选项3'}} />
                    <Input jsxname="field3" jsxlabel="项目三" />
                    <Input jsxname="field4" jsxlabel="项目四" />
                    <Input jsxname="field5" jsxlabel="项目五" />
                    <Other className="other1">
                        <Button>提交</Button>
                        <Button type="secondary">重置</Button>
                    </Other>
                    <FormRowTitle jsxtitle="竖排" />
                    <Select verticalAlign={true} jsxname="field10" jsxlabel="项目一" jsxdata={{a: '选项1', b: '选项2', c: '选项3'}} />
                    <Select verticalAlign={true} jsxname="field20" jsxlabel="项目二" jsxdata={{a: '选项1', b: '选项2', c: '选项3'}} />
                    <Input verticalAlign={true} jsxname="field30" jsxlabel="项目三" />
                    <Input verticalAlign={true} jsxname="field40" jsxlabel="项目四" />
                    <Input verticalAlign={true} jsxname="field50" jsxlabel="项目五" />
                    <Other className="other2">
                        <Button>提交</Button>
                        <Button type="secondary">重置</Button>
                    </Other>
                </Form>
                <Form className="form2">
                    <FormRowTitle jsxtitle="并排" />
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
                    <Other className="other3">
                        <Button>提交</Button>
                        <Button type="secondary">重置</Button>
                    </Other>
                </Form>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(FormDemo, Reflux.connect(Store));


module.exports = FormDemo;
