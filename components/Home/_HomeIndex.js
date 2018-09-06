import React from "react";
import { connect } from "react-redux";
import Examples from './components/examples';
import * as actions from './Actions';

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
			<div>
				<Examples />
			</div>
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
