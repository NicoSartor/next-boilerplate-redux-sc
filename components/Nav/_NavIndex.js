import React from "react";
import { connect } from "react-redux";
import {Link} from '../../routes';

import { Container } from './Styles';

class Nav extends React.Component {
	static getInitialProps({ reduxStore, req }) {
		return {};
	}
	render() {
		return (
			<Container>
				<p>Wrapper</p>
					<ul>
						<li>
							<Link href="/">
								<a href="">Index</a>
							</Link>
						</li>
						<li>
							<Link href="/home">
								<a href="">Home(Clock)</a>
							</Link>
						</li>
						<li>
							<Link href={`/params/this-is-a-param`}>
								<a>Params Example2</a>
							</Link>
						</li>
					</ul>
			</Container>
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);
