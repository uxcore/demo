var Actions = require('./actions');

var Store = Reflux.createStore({
    listenables: [Actions],
    data: {
    },
    updateComponent: function() {
        this.trigger(this.data);
    },
    getInitialState: function() {
        return this.data;
    }
});

module.exports = Store;