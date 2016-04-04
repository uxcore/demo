class Demo extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h2>加载</h2>
                <div className="kuma-loading-s"></div>
                <div className="kuma-loading"></div>
                <div className="kuma-loading-l"></div>
            </div>
        )
    }
}

module.exports = Demo;