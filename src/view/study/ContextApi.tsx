import 'css/contextApi.scss';
import { useState, useContext } from 'react';
import { ThemeContext } from 'view/study/context/ThemeContext';

const Header = () => {
	const data: any = useContext(ThemeContext);
	console.log(data);
	let blackStyle = 'container header';
	if (data.isDark) {
		blackStyle = blackStyle + ' black';
	}

	return (
		<>
			<div className={blackStyle}>
				<h1>Welecome</h1>
			</div>
		</>
	);
};

const Body = () => {
	const data: any = useContext(ThemeContext);
	let blackStyle = 'container body';
	if (data.isDark) {
		blackStyle = blackStyle + ' black';
	}
	return (
		<>
			<div className={blackStyle}>
				<h1>body</h1>
			</div>
		</>
	);
};

const Footer = () => {
	const data: any = useContext(ThemeContext);
	console.log(data.isDark);
	return (
		<>
			<div className="container footer">
				<div>
					<h1>footer</h1>
				</div>
				<button
					onClick={() => {
						data.setIsDark(!data.isDark);
					}}
				>
					색상변경
				</button>
			</div>
		</>
	);
};

const ContextApi = () => {
	const [isDark, setIsDark] = useState(false);
	return (
		<>
			<div className="mainContainer">
				<ThemeContext.Provider value={{ isDark, setIsDark }}>
					<Header></Header>
					<Body></Body>
					<Footer></Footer>
				</ThemeContext.Provider>
			</div>
		</>
	);
};

export default ContextApi;
