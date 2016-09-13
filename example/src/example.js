var React = require('react');
var ReactDOM = require('react-dom');
var NoScript = require('react-noscript');

var App = React.createClass({
	  render () {
		    return (
			      <div>
				        <NoScript>
                    <div style={{padding: '20px', backgroudColor: 'orange', width: '100%'}}>
                        <h1>Yikes!!!!</h1>
                        <h5>It looks like this page does not have JavaScript enabled.</h5>
                    </div>
                </NoScript>
			      </div>
		    );
	  }
});

ReactDOM.render(<App />, document.getElementById('app'));
