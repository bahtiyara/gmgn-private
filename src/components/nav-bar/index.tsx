import { NavLink, useNavigate } from 'react-router-dom';
import st from './index.module.scss';
import clsx from 'clsx';
import { navData } from '@/const';

export function NavBar() {
	const navigate = useNavigate();

	return (
		<div className={st.navBar}>
			<img
				src="/logo.svg"
				alt="Logo"
				className={st.logo}
				onClick={() => navigate('/')}
			/>
			<div className={st.links}>
				{navData.map(({ path, name }) => (
					<NavLink
						className={({ isActive }) =>
							clsx(st.navLink, isActive && st.active)
						}
						key={path}
						to={path}>
						{name}
					</NavLink>
				))}
			</div>
		</div>
	);
}
