/* 
* @Author: ens
* @Date:   2015-08-28 13:24:25
* @Last Modified by:   caoke
* @Last Modified time: 2015-11-26 22:43:24
*/

require('./Hovercard.less');

const classnames = require('classnames');

const {Hovercard} = Uxcore;

const userInfo = {
    "connection": "bilateral",
    "loginUserId": "85377",
    "emailAddr": "hanchao.shc@alibaba-inc.com",
    "jobDesc": "资深前端开发工程师",
    "aliWW": "",
    "tbWW": "九神",
    "extensionPhone": "81178854",
    "travelInfo": "",
    "havanaId": 1804320196,
    "emplId": "67732",
    "nickNameCn": "九神",
    "hrStatus": "A",
    "photoPath": "tfscom\/TB1rddnIpXXXXbBXpXXXXXXXXXX.tfsprivate",
    "deptEnName": "",
    "pinyinNick": "jiushen",
    "deptDesc": "信息平台事业部-EHR-前端开发",
    "orderNum": "",
    "virtMobile": "",
    "pinyin2": "SHAO Hanchao",
    "mobilePhone": "15088618860",
    "jobSubCount": 0,
    "email": "",
    "officePhone": "",
    "deptId": "",
    "hasTeam": false,
    "leader": false,
    "jobTeamCount": 0,
    "name": "邵寒超",
    "id": "67732",
    "avatar": "\/photo\/67732.jpg?1401777321",
    "avatarBig": "",
    "pinyin": "shaohanchao"
};

class Demo extends React.Component {
    render() {
        return (
            <div>
                <h2>人员卡片</h2>
                <h3>国际化</h3>
                <Hovercard emplId={85377} placement="bottom" trigger="click" userInfo={userInfo} locale="en">
                    <a href="javascript:void(0);">九神</a>
                </Hovercard>
                <h3>不同方向，不显示关注</h3>
                <Hovercard emplId={85377} placement="top" trigger="click" userInfo={userInfo} showConn={false}>
                    <a href="javascript:void(0);">九神</a>
                </Hovercard>
                <h3>hover 浮出，不显示职位描述</h3>
                <Hovercard emplId={85377} placement="right" trigger="hover" userInfo={userInfo} hideJobDesc={true}>
                    <a href="javascript:void(0);">九神</a>
                </Hovercard>
            </div>
        );
    }
}

module.exports = Demo;
