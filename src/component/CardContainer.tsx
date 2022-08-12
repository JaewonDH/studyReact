import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// 부모의 특정 태그안에 자식 엘리먼트 넣기
const CardContainer = React.memo(({ label, children }: { label: string; children: JSX.Element }): JSX.Element => {
	console.log('CardContainer 랜더링');
	return (
		<>
			<CssBaseline />
			<Container
				sx={{
					width: '100%',
					pt: 12,
				}}
			>
				<Card sx={{ minWidth: 275, mb: 10 }}>
					<CardContent>
						<Typography variant="h2" component="div">
							{label}
						</Typography>
						<Divider />
						{children}
					</CardContent>
				</Card>
			</Container>
		</>
	);
});

export default CardContainer;
