class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h2>标签</h2>
                <h3>场景描述：多选标签，点击选中、再次点击取消选中</h3>
                <div className="demo-box">
                    <ul className="kuma-tag-pickable">
                        <li className="kuma-tag">
                            <a href="javascript:void(0)">
                                <span>条件一</span>
                                <span className="kuma-checkmarkbg"></span>
                                <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                            </a>
                        </li>
                        <li className="kuma-tag picked">
                            <a href="javascript:void(0)">
                                <span>条件二</span>
                                <span className="kuma-checkmarkbg"></span>
                                <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                            </a>
                        </li>
                        <li className="kuma-tag">
                            <a href="javascript:void(0)">
                                <span>条件三</span>
                                <span className="kuma-checkmarkbg"></span>
                                <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                            </a>
                        </li>
                    </ul>
                    <div className="kuma-filter" style={{width: 350}}>
                        <div className="kuma-filter-title">
                            筛选级一：
                        </div>
                        <ul className="kuma-tag-pickable">
                            <li className="kuma-tag">
                                <a href="javascript:void(0)">
                                    <span>条件一</span>
                                    <span className="kuma-checkmarkbg"></span>
                                    <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                                </a>
                            </li>
                            <li className="kuma-tag picked">
                                <a href="javascript:void(0)">
                                    <span>条件二</span>
                                    <span className="kuma-checkmarkbg"></span>
                                    <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                                </a>
                            </li>
                            <li className="kuma-tag">
                                <a href="javascript:void(0)">
                                    <span>条件三</span>
                                    <span className="kuma-checkmarkbg"></span>
                                    <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                                </a>
                            </li>
                            <li className="kuma-tag">
                                <a href="javascript:void(0)">
                                    <span>条件一</span>
                                    <span className="kuma-checkmarkbg"></span>
                                    <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                                </a>
                            </li>
                            <li className="kuma-tag">
                                <a href="javascript:void(0)">
                                    <span>条件二</span>
                                    <span className="kuma-checkmarkbg"></span>
                                    <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                                </a>
                            </li>
                            <li className="kuma-tag">
                                <a href="javascript:void(0)">
                                    <span>条件三</span>
                                    <span className="kuma-checkmarkbg"></span>
                                    <span className="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3>场景描述：可作为印象标签的选择</h3>
                <div className="demo-box">
                    <span className="kuma-tag kuma-tag-selectable">默认</span>
                    <span className="kuma-tag kuma-tag-selectable selected">选中后</span>
                    <span className="kuma-tag kuma-tag-selectable kuma-tag-disabled">不可操作</span>
                </div>
                <h3>场景描述：标签有数字，可点击相应</h3>
                <div className="demo-box">
                    <table>
                        <tr>
                            <td>默认可操作</td>
                            <td><span className="kuma-tag">标签1</span></td>
                            <td>默认可操作</td>
                            <td>
                                <span className="kuma-tag">
                                    <i className="kuma-icon kuma-icon-add"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>不可操作</td>
                            <td><span className="kuma-tag kuma-tag-disabled">标签1</span></td>
                            <td>hover</td>
                            <td>
                                <span className="kuma-tag">
                                    <i className="kuma-icon kuma-icon-add"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>数字超过99时</td>
                            <td>
                                <div className="kuma-tag kuma-tag-group">
                                    <span className="kuma-tag-left">标签1</span>
                                    <a href="#" className="kuma-tag-right">99+</a>
                                </div>
                            </td>
                            <td>新增标签</td>
                            <td>
                                <span className="kuma-tag">标签1</span>
                                <span className="kuma-tag">
                                    <i className="kuma-icon kuma-icon-add"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>移上去可+1</td>
                            <td>
                                <div className="kuma-tag kuma-tag-group">
                                    <span className="kuma-tag-left">标签1</span>
                                    <a href="#" className="kuma-tag-right">
                                        <i className="kuma-icon kuma-icon-add"></i>
                                    </a>
                                </div>
                            </td>
                            <td>删除标签</td>
                            <td>
                                <div className="kuma-tag kuma-tag-group">
                                    <span className="kuma-tag-left">标签1</span>
                                    <a href="#" className="kuma-tag-right">
                                        <i className="kuma-icon kuma-icon-close"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

module.exports = Demo;