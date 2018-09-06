import React from "react";
import { connect } from "react-redux";
import Link from 'next/link';


class Index extends React.Component {
	static getInitialProps({ reduxStore, req }) {
		// const isServer = !!req;
		// reduxStore.dispatch(serverRenderClock(isServer));

		return {};
	}

	render() {
		return (
			<div>
				<h1>This is the index page</h1>
			</div>
		);
	}
}

export default connect()(Index);
