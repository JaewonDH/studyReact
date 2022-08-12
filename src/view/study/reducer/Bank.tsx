import { useReducer, useState } from 'react';

const ACTION_TYPE = {
	ACTION_INPUT: 1,
	ACTION_OUTPU: 2,
};

interface Action {
	type: number;
	money: number;
}

const reducer = (state: number, action: Action) => {
	switch (action.type) {
		case ACTION_TYPE.ACTION_INPUT:
			return state + action.money;
		case ACTION_TYPE.ACTION_OUTPU:
			return state - action.money;
		default:
			return state;
	}
};

const Bank = () => {
	const [inputValue, setInputValue] = useState(0);
	const [money, dispatch] = useReducer(reducer, 0);

	const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(Number(e.target.value));
	};

	return (
		<>
			<h2>은행에 오신것을 환영 합니다.</h2>
			<h4> 잔고: {money}</h4>
			<input type="number" step="1000" value={inputValue} onChange={onchange}></input>
			<button
				onClick={() => {
					dispatch({ type: ACTION_TYPE.ACTION_INPUT, money: inputValue });
				}}
			>
				예금
			</button>
			<button
				onClick={() => {
					dispatch({ type: ACTION_TYPE.ACTION_OUTPU, money: inputValue });
				}}
			>
				출금
			</button>
		</>
	);
};

export default Bank;
