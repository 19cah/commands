import React from 'react';
import ReactDOM from 'react-dom';
import ReactPll from 'react-pll';
import './index.css';

const languages = ['c', 'cpp', 'csharp', 'css', 'go_old', 'go', 'haskell', 'html', 'java', 'javascript', 'kotlin', 'lua', 'php', 'python', 'r', 'ruby', 'swift', 'typescript'];

const App = () => (
	<div className="app">
		{languages.map(language => (
			<ReactPll key={language} language={language} className="logo"/>
		))}
	</div>
);

ReactDOM.render(<App/>, document.querySelector('#root'));
