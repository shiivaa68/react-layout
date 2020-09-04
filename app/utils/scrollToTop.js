import * as React from "react";
import { withRouter } from "react-router";

export var ScrollToTop = withRouter(
	class ScrollToTopWithoutRouter extends React.Component {
		componentDidUpdate(prevProps) {
			if (this.props.location.pathname !== prevProps.location.pathname) {
				window.scroll({
					top: 0, 
					left: 0, 
					behavior: 'auto'
				  });
			}
		}
		render() {
			return null;
		}
	}
);