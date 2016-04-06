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
        let me = this;
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
            height:300,
            pageSize: 5,
            fetchUrl:"http://eternalsky.me:8122/file/getDemo.jsonp",
            jsxcolumns: columns,
        };
        let columns2 = [
            { dataKey: 'title', title: '标题', width: 200, message: '只是一个标题'},
            { dataKey: 'money', title: '金额', width: 200, type: 'text', ordered: true},
            { dataKey: 'agent', title: "金融机构", width: 200, render: function(cellData, rowData) {
                return <div><a href="javascript:;">{rowData.agent}</a></div>
            }},  
            { dataKey: 'person', title: "申请人", width: 100},
            { dataKey: 'date',title: "日期", width: 150},
            { dataKey: 'action', title: '操作', type: 'action', actions: [
                {
                    title: '编辑',
                    callback: function(rowData) {
                        me.refs.table2.editRow(rowData);
                    }
                },
                {
                    title: '保存',
                    callback: function(rowData) {
                        me.refs.table2.saveRow(rowData);
                    }
                },
                {
                    title: '操作三',
                    callback: function() {
                        alert('操作三')
                    }
                }
            ]}
        ];
        let renderProps2 = {
            height:300,
            pageSize: 5,
            fetchUrl:"http://eternalsky.me:8122/file/getDemo.jsonp",
            jsxcolumns: columns2,
            ref: 'table2'
        };
        return (
            <div className="table">
                <h2>列表</h2>
                <Table {...renderProps} />
                <h3>行内编辑表格</h3>
                <Table {...renderProps2} />
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
