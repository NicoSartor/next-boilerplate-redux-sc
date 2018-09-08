import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html>
				<Head>
					<title>My page</title>
					<meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
					<link href="https://fonts.googleapis.com/css?family=Libre+Franklin:100,100i,200,200i,300,300i,400" rel="stylesheet"></link>
					<style dangerouslySetInnerHTML={
						{__html:
						`
						html, body, div, span, applet, object, iframe,
						h1, h2, h3, h4, h5, h6, p, blockquote, pre,
						a, abbr, acronym, address, big, cite, code,
						del, dfn, em, img, ins, kbd, q, s, samp,
						small, strike, strong, sub, sup, tt, var,
						b, u, i, center,
						dl, dt, dd, ol, ul, li,
						fieldset, form, label, legend,
						table, caption, tbody, tfoot, thead, tr, th, td,
						article, aside, canvas, details, embed, 
						figure, figcaption, footer, header, hgroup, 
						menu, nav, output, ruby, section, summary,
						time, mark, audio, video {
							margin: 0;
							padding: 0;
							border: 0;
							font-size: 100%;
							vertical-align: baseline;
						}
						/* HTML5 display-role reset for older browsers */
						article, aside, details, figcaption, figure, 
						footer, header, hgroup, menu, nav, section {
							display: block;
						}
						body {
							line-height: 1;
						}
						ol, ul {
							list-style: none;
						}
						blockquote, q {
							quotes: none;
						}
						blockquote:before, blockquote:after,
						q:before, q:after {
							content: '';
							content: none;
						}
						table {
							border-collapse: collapse;
							border-spacing: 0;
						}

						body * {
							font-family: 'Libre Franklin', sans-serif;
						}
						`
					}
					}/>
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
