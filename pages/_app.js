import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
//import Link from "next/link";
import { Link } from "../routes";


class MyApp extends App {
	componentDidMount(){

	}
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Container>
				<Provider store={reduxStore}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

export default withReduxStore(MyApp);
