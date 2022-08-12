import React, { useEffect, useState, useMemo, useCallback } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import StateGoodSample from '../../component/StateGoodSample';
import { useParams } from 'react-router-dom';

interface User {
	name: string;
	age: string;
}

interface AddUserProps {
	inputUser: User;
	addEvent: Function;
	inputChangeEvnet: Function;
}

const UserList = React.memo((props: { userList: User[]; removeEvent: Function }) => {
	console.log('UserList');
	return (
		<>
			{props.userList.map((user: User, index: number) => {
				return (
					<div key={index}>
						<span>
							이름:{user.name} - 나이: {user.age}{' '}
						</span>
						<button
							onClick={() => {
								props.removeEvent(index);
							}}
						>
							제거
						</button>
					</div>
				);
			})}
		</>
	);
});

const AddUser = React.memo((props: AddUserProps): JSX.Element => {
	console.log('AddUser');
	return (
		<>
			<div>
				<span>이름:</span>
				<input
					type="text"
					onChange={(event) => {
						props.inputChangeEvnet(true, event.target.value);
					}}
				/>
				<span>나이:</span>
				<input
					type="text"
					onChange={(event) => {
						props.inputChangeEvnet(false, event.target.value);
					}}
				/>
				<button
					onClick={() => {
						props.addEvent();
					}}
				>
					추가
				</button>
			</div>
		</>
	);
});

const HookTest = () => {
	let [count, setCount] = useState<number>(0);

	// 마운트 언 마운트
	useEffect(() => {
		console.log('처음 한번 호출 : ', count);
		return () => {
			console.log('컴포넌트가 화면에서 사라짐');
		};
	}, []);

	// count 값이 변경 될 때만 호출
	useEffect(() => {
		console.log('값이 변경 될 때 마다 호출 ', count);
	}, [count]);

	return (
		<>
			<div>
				<span>count :{count}</span>
			</div>
			<button
				onClick={() => {
					setCount(++count);
				}}
			>
				카운트 증가
			</button>
		</>
	);
};

const UserBox = React.memo(() => {
	let [userList, setUserList] = useState<User[]>([]);
	let [inputUser, setInputUser] = useState<User>({
		name: '',
		age: '',
	});

	const { name, age } = inputUser;

	const addEvent = useCallback(() => {
		console.log('addEvent');
		setUserList(() => {
			return [
				...userList,
				{
					name,
					age,
				},
			];
		});
	}, [userList, name, age]);

	const inputChangeEvnet = useCallback(
		(isUserName: boolean, value: string) => {
			console.log('inputChangeEvnet');
			setInputUser(() => {
				return isUserName ? { ...inputUser, name: value } : { ...inputUser, age: value };
			});
		},
		[inputUser]
	);

	const removeEvnet = (index: number) => {
		console.log('removeEvnet');
		setUserList(() => {
			return userList.filter((user, filterIndex) => index !== filterIndex);
		});
	};

	const userCount = () => {
		//키입력에 의한 이벤트는 호출이 안되고 userList 변경에 대한 호출만 발생
		console.log('userCount');
		return userList.length;
	};
	return (
		<>
			<AddUser inputUser={inputUser} addEvent={addEvent} inputChangeEvnet={inputChangeEvnet} />
			<UserList userList={userList} removeEvent={removeEvnet}></UserList>
			<div>User count : {userCount()}</div>
		</>
	);
});

export default function State() {
	const params = useParams();
	console.log('params', params);
	return (
		<React.Fragment>
			<CssBaseline />
			<Container
				sx={{
					width: '100%',
					height: '100%',
					pt: 12,
				}}
			>
				<Card sx={{ minWidth: 275, mb: 10 }}>
					<CardContent>
						<Typography variant="h2" component="div">
							State Hook
						</Typography>
						<Typography variant="h6" component="div">
							useState 사용해야 변경 되는 값에 따라 재 랜더링 된다.
						</Typography>
						<Divider />
						<HookTest></HookTest>
						<UserBox></UserBox>
					</CardContent>
				</Card>
				<Card sx={{ minWidth: 275, mb: 10 }}>
					<CardContent>
						<Typography variant="h2" component="div">
							state use
						</Typography>
						<Typography variant="h6" component="div">
							사용 법 상위 컴포넌트에서 사용해서 하위 컴포넌트로 전달해야 한다.
						</Typography>
						<Divider />
						<StateGoodSample></StateGoodSample>
					</CardContent>
				</Card>
			</Container>
		</React.Fragment>
	);
}
