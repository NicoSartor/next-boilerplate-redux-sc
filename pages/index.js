import React from "react";
import { connect } from "react-redux";
import Link from 'next/link';
import Layout from '../components/Layout/_LayoutIndex';


class Index extends React.Component {
	static getInitialProps({ reduxStore, req }) {
		// const isServer = !!req;
		// reduxStore.dispatch(serverRenderClock(isServer));

		return {};
	}

	render() {
		return (
			<Layout>
				<h1>This is the index page</h1>
			</Layout>
		);
	}
}

export default connect()(Index);
