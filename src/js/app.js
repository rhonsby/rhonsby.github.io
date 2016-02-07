var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="nav">
          <div className="nav-title">Robert Honsby</div>
          <div className="nav-links-container"></div>
        </div>
        <div className="content">
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementsByClassName('main')[0]);
