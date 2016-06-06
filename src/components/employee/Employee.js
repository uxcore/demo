/* 
* @Author: ens
* @Date:   2015-08-28 13:24:25
* @Last Modified by:   caoke
* @Last Modified time: 2015-11-26 22:43:24
*/

require('./Employee.less');

let classnames = require('classnames');

let EmployeeSearch = Uxcore.EmployeeSearch;
let assign = require('object-assign');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ["61639"],
            value2: ["61639-1","62000-0"],
            // value: null,
            userList: [
                {
                    avatar: "//work.alibaba-inc.com/photo/61639.jpg",
                    emplId: "61639",
                    orderNum:"0",
                    jobDesc: "资深开发工程师",
                    deptDesc: "B2B-技术部-1688技术部-运营平台(1)",
                    name: "蔡孟松",
                    nickNameCn: "蒙义"
                },
                {
                    avatar: "//work.alibaba-inc.com/photo/61639.jpg",
                    emplId: "61639",
                    orderNum:"1",
                    jobDesc: "资深开发工程师",
                    deptDesc: "B2B-技术部-1688技术部-运营平台(2)",
                    name: "蔡孟松",
                    nickNameCn: "蒙义"
                },
                {
                    avatar: "//work.alibaba-inc.com/photo/61639.jpg",
                    emplId: "62000",
                    orderNum:"0",
                    jobDesc: "开发工程师",
                    deptDesc: "B2B-技术部-1688技术部-运营平台(3)",
                    name: "无名",
                    nickNameCn: "暂定"
                }
            ]
        }
    }

    handleChange(value, data) {
        console.log("data   ", data);
        console.log("value ", value);
        console.log("parsed value", EmployeeSearch.parseValue(value))
        this.setState({
            value: value
        })
    }

    handleChange2(value, data) {
        console.log("data   ", data);
        console.log("value ", value);
        console.log("parsed value", EmployeeSearch.parseValue(value))
        this.setState({
            value2: value
        })
    }

    handleSearch(key) {
        console.log(key)
    }

    render() {
        let me = this;

        let options = {
            value: me.state.value,
            onChange: this.handleChange.bind(this),
            userList: me.state.userList,
            url: "https://work.alibaba-inc.com/work/xservice/sns/suggestion/suggestionAt.jsonp",
        }
        let options2 = assign({}, options, {
            value: me.state.value2,
            hasOrderNum: true,
            onChange: this.handleChange2.bind(this)
        })
        return (
            <div>
                <h1>正常模式</h1>
                <EmployeeSearch {...options}/>
                <h1>主职兼职 & 直接下属</h1>
                <EmployeeSearch {...options2}/>
            </div>
        );
    }
};

module.exports = Demo;
