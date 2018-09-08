import React from "react";
import { connect } from "react-redux";
import Examples from './components/examples';
import * as actions from './Actions';
import Layout from '../Layout/_LayoutIndex';

class Home extends React.Component {
	static getInitialProps({ reduxStore, req }) {
		const isServer = !!req;
		reduxStore.dispatch(actions.serverRenderClock(isServer));
		return {};
	}

	componentDidMount() {
		this.timer = this.props.startClock();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<Layout>
				<Examples />
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	return {
		AppState: state.AppReducer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		startClock: () => actions.startClock(dispatch)
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
