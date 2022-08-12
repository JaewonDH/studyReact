import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

interface Menu {
	name: string;
	path: string;
}

export default function LeftMenu() {
	const drawerWidth = 240;
	const navigate = useNavigate();
	const menuList: Menu[] = [
		{
			name: 'props',
			path: '/study/props',
		},
		{
			name: 'list-api',
			path: '/study/list-api/1', // 라우터 param 1전달
		},
		{
			name: 'State',
			path: '/study/state',
		},
		{
			name: 'ContextAPI',
			path: '/study/context',
		},
		{
			name: 'useReducer',
			path: '/study/useReducer',
		},
		{
			name: '(use Hook)',
			path: '/study/user',
		},
	];

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: drawerWidth,
				height: '100vh',
				[`& .MuiDrawer-paper`]: {
					width: drawerWidth,
					boxSizing: 'border-box',
					position: 'unset',
					borderRight: 1,
					borderColor: 'rgba(0, 0, 0, 0.12)',
				},
			}}
		>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<List>
					{menuList.map((menu, index) => (
						<ListItem
							key={index}
							disablePadding
							onClick={() => {
								navigate(menu.path, { state: { id: 1, name: 'sabaoon' } });
							}}
						>
							<ListItemButton>
								<ListItemIcon>
									<StarBorderIcon></StarBorderIcon>
								</ListItemIcon>
								<ListItemText primary={menu.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Box>
		</Drawer>
	);
}
