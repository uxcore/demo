/* 
* @Author: ens
* @Date:   2015-08-28 13:24:25
* @Last Modified by:   caoke
* @Last Modified time: 2015-11-26 22:43:24
*/

require('./Calendar.less');

let reactMixin = require('react-mixin');
let Store = require('./store');
let Actions = require('./actions');
let {Calendar, Button} = Uxcore;
let {MonthCalendar, YearCalendar} = Calendar

function disabledDate(current, value){
    return current.getTime() > Date.now();
}

class CalendarDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleClick() {
        this.setState({
            value: '2016-02-05'
        })
    }

    onSelect(value, formatted) {
        console.log(value, formatted);
        this.setState({
            value: value
        });
    }

    render() {
        let me = this;
        return (
            <div className="calendar">
                <h2>日历</h2>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>基本</p>
                    <Calendar locale="en-us" value={this.state.value} onSelect={this.onSelect.bind(this)} />
                </div>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>日期格式</p>
                    <Calendar value={this.state.value} format="yyyy/MM/dd" onSelect={this.onSelect.bind(this)} />
                </div>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>选择日期</p>
                    <Calendar onSelect={this.onSelect.bind(this)} value={this.state.value}/>
                </div>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>范围</p>
                    <Calendar disabledDate={disabledDate} value={this.state.value} onSelect={this.onSelect.bind(this)} />
                </div>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>时间选择</p>
                    <Calendar hasTrigger={true} showTime={true} format="yyyy-MM-dd HH:mm:ss" value={this.state.value} onSelect={this.onSelect.bind(this)} />
                </div>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>禁用</p>
                    <Calendar value={this.state.value} disabled={true} onSelect={this.onSelect.bind(this)}/>
                </div>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>月份</p>
                    <MonthCalendar value={this.state.value} onSelect={this.onSelect.bind(this)} />
                </div>
                <div className="kuma-form-field" style={{width: 400}}>
                    <p>年份</p>
                    <YearCalendar value={this.state.value} onSelect={this.onSelect.bind(this)} />
                </div>
                <Button className="calendar-button" onClick={me.handleClick.bind(me)}>changeTime</Button>
            </div>
        )
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

reactMixin.onClass(CalendarDemo, Reflux.connect(Store));


module.exports = CalendarDemo;
