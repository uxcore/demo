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
let {Table, Select2, Radiogroup, Validator, Const, Button} = Uxcore;
let {Option} = Select2;
let RadioItem = Radiogroup.Item;

class TableDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                "data": [
                    {
                        "email":"xw@abc.com",
                        "nameId": "xiaowang",
                        "name":"小王",
                        "cityId": "bj",
                        "city":"北京"
                    },
                    {
                        "email":"xl@abc.com",
                        "nameId": "xiaoli",
                        "name":"小李",
                        "cityId": "hz",
                        "city":"杭州"
                    },
                    {
                        "email":"xl@abc.com",
                        "nameId": "xiaoli",
                        "name":"小李",
                        "cityId": "hz",
                        "city":"杭州"
                    }
                ]
            }
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
            rowSelection: {
                onSelect: function() {
                    
                }
            }
        };
        
        let columns2 = [
            { dataKey: 'jsxid', title: 'jsxid', width: 80},
            { dataKey: 'city', editKey: 'cityId',title:'城市', width: 200, type:'select', children: [{id: 'bj', name: '北京'},{id: 'hz', name: '杭州'}].map((item) => {
                return <Option key={item.id}>{item.name}</Option>
            }), config: {filterOption: false}, canEdit: function(rowData) { return rowData.name !== "小王"}},
            // { dataKey: 'place', title: '城市区间', width: 500, type: 'custom', customField: PlaceSelect},
            { dataKey: 'name', editKey: 'nameId', title:"姓名", width: 200, type:"radio", children: [{id: 'xiaoli', name: '小李'}, {id: 'xiaowang', name: '小王'}].map((item) => {
                return <RadioItem key={item.id} text={item.name} value={item.id} />
            })},  
            { dataKey: 'email', title: "Email", width: 200,type:"text", rules: {validator: Validator.isEmail, errMsg: ""}, config: {onBlur: function(e) {console.log(e);} }},
            { dataKey: 'action1', title: '操作1', width:100, type:"action", actions: [
                    {
                        title: '编辑',
                        callback: (rowData) => {
                            me.refs.grid.editRow(rowData);
                        },
                        mode: Const.MODE.VIEW
                    },
                    {
                        title: '保存',
                        callback: (rowData) => {
                            me.refs.grid.saveRow(rowData);
                        },
                        mode: Const.MODE.EDIT
                    },
                    {
                        title: '删除',
                        callback: (rowData) => {
                            me.refs.grid.delRow(rowData);
                        },
                        // mode: Const.MODE.VIEW
                    },
                    {
                        title: '重置',
                        callback: (rowData) => {
                            me.refs.grid.resetRow(rowData);
                        },
                        mode: Const.MODE.EDIT
                    }
                ]
            }
        ];


        let renderProps2 = {
            // height: 200,
            width: 1000,
            showPager:false,
            ref: 'grid',
            fetchParams: {},
            showHeaderBorder: true,
            getSavedData: true,
            jsxdata: me.state.data,
            doubleClickToEdit: true,
            actionBar: [
                {
                    title: '新增行',
                    callback: () => {
                        me.refs.grid.addEmptyRow();
                    }
                },
                {
                    title: "编辑所有行",
                    callback: () => {
                        me.refs.grid.editAllRow();
                    }
                },
                {
                    title: "保存所有行",
                    callback: () => {
                        me.refs.grid.saveAllRow();
                    }
                }
                
            ],
            // fetchUrl:"http://demo.nwux.taobao.net/file/getGridJson.jsonp",
            // fetchUrl: "http://10.1.159.52:3002/demo/data.json",
            jsxcolumns:columns2,
            beforeFetch: (sendData) => {sendData.id = 1; return sendData;},
            processData: (data) => {return data;},
            onChange: me.handleTableChange       
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
