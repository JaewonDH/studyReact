import CardContainer from 'component/CardContainer';
import Bank from 'view/study/reducer/Bank';
import School from 'view/study/reducer/School';

const UseReducer = () => {
	return (
		<>
			<div style={{ display: 'flex', width: '100%' }}>
				<CardContainer label="예제1 reducer">
					<Bank></Bank>
				</CardContainer>
				<CardContainer label="예제2 reducer">
					<School></School>
				</CardContainer>
			</div>
		</>
	);
};

export default UseReducer;
