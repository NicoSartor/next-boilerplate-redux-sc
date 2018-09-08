import styled from "styled-components";

export const LayoutContainer = styled.div`
	display: grid;
	grid-template-columns: 220px calc(100vw - 220px);

	@media (max-width: 700px) {
		display: block;
	}
`