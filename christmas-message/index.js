import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {random as christmasMessage} from 'merry-christmas';

import Colorize from './colorize';
import Button from './button';

import './style.css';

const App = () => {
	const [message, setMessage] = useState(christmasMessage());

	return (
		<section>
			<Colorize word="christmas">
				{message}
			</Colorize>

			<Button title="Next" onClick={() => setMessage(christmasMessage())}/>
		</section>
	);
};

ReactDOM.render(<App/>, document.querySelector('#app'));
