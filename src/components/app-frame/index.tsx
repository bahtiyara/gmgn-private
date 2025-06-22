import { NavBar } from '../nav-bar';
import st from './index.module.scss';

type Props = {
	children: React.ReactNode;
};

export function AppFrame({ children }: Props) {
	return (
		<div className={st.appPage}>
			<NavBar />
			<div className={st.main}>{children}</div>
			<div className={st.footer}>footer</div>
		</div>
	);
}
