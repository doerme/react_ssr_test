var React = require('react');
var createReactClass = require('create-react-class');
 
var App = createReactClass({
    getInitialState: function() {
        return {
            count: this.props.initialCount
        };
    },
    _increment: function() {
        this.setState({ count: this.state.count + 1 });
    },
    render: function() {
        return (
            <div>
                <span>the count is: </span>
                <span onClick={this._increment}>{this.state.count}</span>
            </div>
        )
    }
})
 
module.exports = App;