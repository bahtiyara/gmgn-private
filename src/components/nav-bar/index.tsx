import { NavLink, useNavigate } from 'react-router-dom';
import st from './index.module.scss';
import clsx from 'clsx';
import { navData } from '@/const';
import { Input } from '@/ui/input';
import { IconChevronDown } from '@/icons/chevron-down';
import { IconSettings } from '@/icons/settings';
import { Button } from '@/ui/button';

export function NavBar() {
	const navigate = useNavigate();

	return (
		<div className={st.navBar}>
			<img
				src="/svg/logo.svg"
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
			<div className={st.center}>
				<Input
					placeholder="Search token/contract/wallet"
					wrapperClassName={st.search}
				/>
			</div>
			<div className={st.right}>
				<div className={st.chain}>
					<img src="/img/solana.webp" alt="Chain" />
					<span>SOL</span>
					<IconChevronDown />
				</div>
				<IconSettings style={{ marginRight: 2, cursor: 'pointer' }} />
				<Button>Sign Up</Button>
				<Button type="primary">Log In</Button>
			</div>
		</div>
	);
}
