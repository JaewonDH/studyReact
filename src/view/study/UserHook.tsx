import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import CardContainer from 'component/CardContainer';

interface UserInput {
	id?: number;
	name?: string | undefined;
	email?: string | undefined;
}

const InputUser = ({
	label,
	name,
	inputChange,
	refdata,
}: {
	label: string;
	name: string;
	inputChange: Function;
	refdata?: any;
}): JSX.Element => {
	return (
		<>
			<span>{label}:</span>
			<input
				ref={refdata}
				name={name}
				type="text"
				onChange={(evnet) => {
					inputChange(evnet);
				}}
			></input>
		</>
	);
};

/*
React.memo를 통해 props의 데이터가 변경 되지 않으면 재 랜더링 하지 않도록 처리 
inputChange 값이 변경이 되면 재랜더링 CreateUser로 전달하는 부모 컴포넌트에서 
inputChange 넣을 함수의 변수의 값을 다시 선언 하면 재랜더링 되기 때문에 useCallback 사용하여 
재랜더링 되지 않도록 처리 할 수 있다 .
*/
const CreateUser = React.memo((props: { inputChange: Function; onClick: Function }) => {
	console.log('CreateUser 랜더링');
	// 이름태그의 dom에 접근하여 focus 함수 호출 가능
	const nameInput: any = useRef(null);
	return (
		<>
			<InputUser refdata={nameInput} label="이름" name="name" inputChange={props.inputChange}></InputUser>
			<InputUser label="이메일" name="email" inputChange={props.inputChange}></InputUser>
			<button
				onClick={() => {
					props.onClick();
					nameInput.current.focus();
				}}
			>
				추가
			</button>
		</>
	);
});

const UserList = React.memo((props: { userList: UserInput[]; remove: Function }) => {
	console.log('UserList 랜더링');
	return (
		<>
			{props.userList.map((item, index) => {
				return (
					<div key={item.id}>
						<span>Name:{item.name} ---- </span>
						<span>Email:{item.email}</span>
						<button
							onClick={() => {
								props.remove(item.id);
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

const User = () => {
	console.log('User 랜더링');
	let [userInfo, setUserInfo] = useState<UserInput>({});
	let [userList, setUserList] = useState<UserInput[]>([]);
	const userId = useRef(0);

	// test 의 값이 랜더링 되면서 다시 저장 되기 때문에 항상 값을 저장하기 때문에 이것을 막으려면 useMemo
	// 사용하면 다시 저장되지 않고 이전의 값을 유지 하며 [userInfo] userInfo 값이 변경되면 다시 저장 되게 된다.
	const test = useMemo(() => {
		return {
			name: 'd',
		};
	}, [userInfo]);

	//useCallback 을 사용 하여 User가 리 렌더링 될 때 새로 선언 되지 않도록 하여
	//CreateUser 컴포넌트가 다시 재 랜더링 되지 않도록 하기 위해 추가 onchange 함수가
	// 재 선언 되면 CreateUser 다시 선언 된다.
	const onchange = useCallback((data: any) => {
		console.log('onchange');
		setUserInfo((userInfo) => {
			return {
				...userInfo,
				[data.target.name]: data.target.value,
			};
		});
	}, []);

	//useCallback의 재 선언 되는 경우는 파라미터 [userInfo] userInfo 값이 변경 되면 재 선언 되어
	//CreateUser 컴포넌트의 props로 addUser 넘기기 때문에 addUser 값이 변경 되어 재 랜더링 된다.
	const addUser = useCallback(() => {
		setUserList((userList): UserInput[] => {
			console.log('userId.current', userId.current);
			return [...userList, { id: (userId.current += 1), name: userInfo.name, email: userInfo.email }];
		});
	}, [userInfo]);

	const remove = useCallback(
		(id: number) => {
			setUserList(userList.filter((user) => user.id !== id));
		},
		[userList]
	);

	useEffect(() => {
		console.log('useEffect test');
	}, [test]);

	useEffect(() => {
		console.log('useEffect onchange');
	}, [onchange]);

	useEffect(() => {
		console.log('useEffect addUser');
	}, [addUser]);

	return (
		<>
			<CreateUser inputChange={onchange} onClick={addUser}></CreateUser>
			<UserList userList={userList} remove={remove}></UserList>
		</>
	);
};

//useState 분리 시켜야 부모 컴포넌트의 재 랜더링을 방지 할 수 있다.
const UserHook = () => {
	return (
		<>
			<CardContainer label="useModel , useCallBack, React.memo , useRef 사용법">
				<User></User>
			</CardContainer>
		</>
	);
};

export default UserHook;
