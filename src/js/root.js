import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import StarHeader from './starCom/star_Header';
import PCFooter from './components/pc_footer';
export default class Root extends React.Component {
	render() {
		return (
			<div>
				<StarHeader/>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));
