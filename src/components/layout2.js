import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
// import Footer from './footer';

import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"


const Layout = ({ children }) => (
	<div css={css`
    margin: 0 auto;
    max-width: 700px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
  `}
  >
		<Navbar siteTitle="Semmle Blog"/>
		<main>
			{children}
		</main>
		{/* <Footer/> */}
	</div>
	
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}
  
export default Layout