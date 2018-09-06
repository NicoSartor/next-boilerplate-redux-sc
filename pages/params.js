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
				<p>On server.js define your route with params, (see example '/params/:id')</p>
				<p>You can use the :id to make customized fetches on 'getInitialProps' by adding its value as part of the request body.</p>
				<p>On the server you can add as many parameters as you need and retrieve the data from the query object.</p>
				<p>Try adding a param to the url, it should show here: <span>{this.props.query.id}</span></p>
			</div>
		);
	}
}

export default connect()(ParamsExample);
