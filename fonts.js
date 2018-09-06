import styled, { css } from 'styled-components'
import colors from './colors'

/* Terminal properties */
const bold = css`
	font-weight: 700;
`
const noDecoration = css`
	text-decoration: none;
`
const inline = css`
	display: inline;
`
const inlineBlock = css`
	display: inline-block;
`
const uppercase = css`
	text-transform: uppercase;
	letter-spacing: 0.8px;
`
const center = css`
	text-align: center;
`
const right = css`
	text-align: right;
`
const withMargins = css`
	margin-top: 15px;
	margin-bottom: 15px;
`
const mdSpacing = css`
	line-height: 25px;
`
const xs = css`
	font-size: 10px;
`
const sm = css`
	font-size: 11px;
`
const md = css`
	font-size: 13px;
`
const lg = css`
	font-size: 15px;
`
const xl = css`
	font-size: 20px;
`
const xxl = css`
	font-size: 50px;
`

/* Non-terminal Properties */
const chunky = css`
	letter-spacing: 0.7px;
	${sm};
	${uppercase};
	${bold};
`
const link = css`
	cursor: pointer;
	${inline};
	& > a {
		${noDecoration};
		color: ${colors.gold};
	}
`

/* Interface */
const Text = styled.p`
	font-family: 'Libre Franklin', sans-serif;
	font-weight: normal;
	color: ${ props => 
		props.grey ? colors.grey :
		props.white ? colors.white : 
		props.gold ? colors.gold : 
		props.black
	};
	${ props => /* font size */
		props.xs ? xs :
		props.sm ? sm : 
		props.md ? md :
		props.lg ? lg :
		props.xl ? xl :
		props.xxl ? xxl :
		md
	};
	margin: 0;
	${ props => props.uppercase && uppercase};
	${ props => props.link && link};
	${ props => props.inline && inline};
	${ props => props.inlineBlock && inlineBlock};
	${ props => props.bold && bold};
	${ props => props.chunky && chunky};
	${ props => props.center && center};
	${ props => props.right && right};
	${ props => props.mdSpacing && mdSpacing};
	${ props => props.withMargins && withMargins};
	${ props => props.noDecoration && noDecoration};
	${ props => props.override};
`

export default Text