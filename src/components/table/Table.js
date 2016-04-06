/* 
* @Author: ens
* @Date:   2015-08-28 13:24:25
* @Last Modified by:   caoke
* @Last Modified time: 2015-11-26 22:43:24
*/

require('./Table.less');

let reactMixin = require('react-mixin');
let Store = require('./store');
let Actions = require('./actions');
let {Table} = Uxcore;

class TableDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let t = this;
        var columns = [
            { dataKey: 'title', title: '标题', width: 200},
            { dataKey: 'money', title: '金额', width: 200, type: 'money', delimiter: ","},
            { dataKey: 'agent', title: "金融机构", width: 200, render: function(cellData, rowData) {
                return <div><a href="javascript:;">{rowData.agent}</a></div>
            }},  
            { dataKey: 'person', title: "申请人", width: 100},
            { dataKey: 'date',title: "日期", width: 150}
        ];
        var renderProps = {
            height:300,
            pageSize: 5,
            fetchUrl:"http://eternalsky.me:8122/file/getDemo.jsonp",
            jsxcolumns: columns,
        };
        return (
            <div className="table">
                <h2>列表</h2>
                <Table {...renderProps} />
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

reactMixin.onClass(TableDemo, Reflux.connect(Store));


module.exports = TableDemo;
