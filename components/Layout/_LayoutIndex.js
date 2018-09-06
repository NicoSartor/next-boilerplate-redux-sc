import Nav from '../Nav/_NavIndex';

const Layout = (props) => (
	<div>
		<Nav/>
		{props.children}
	</div>
)

export default Layout