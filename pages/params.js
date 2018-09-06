import React from "react";
import { connect } from "react-redux";
import Link from 'next/link';


class ParamsExample extends React.Component {
	static getInitialProps({ query }) {
		console.log('[QUERY]', query)
		if(!query){
			query= {id: 'no query'}
		}
		return {query};
	}

	render() {
		console.log('PROPS', this.props)
		return (
			<div>
				<h1>Params Page</h1>
				<p>Adding params require you to start the server.js file instead of running next commands, hot reload breaks</p>
				<p>On routes.js define your route with params.</p>
				<p>On server.js define the route, also set the route without params, so next doesnt break</p>
				<p>Test <a href='https://www.npmjs.com/package/nextjs-dynamic-routes'>nextjs-dynamic-routes</a> later on</p>
				<p>Try adding a param to the url, it should show here: <span>{this.props.query.id}</span></p>
				<p>You can add another param, but that needs a different route and page.</p>
			</div>
		);
	}
}

export default connect()(ParamsExample);
