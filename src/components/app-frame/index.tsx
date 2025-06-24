import clsx from 'clsx';
import { NavBar } from '../nav-bar';
import st from './index.module.scss';

type Props = React.HTMLAttributes<HTMLDivElement>;

export function AppFrame({ children, className, ...rest }: Props) {
	return (
		<div className={st.appPage}>
			<NavBar />
			<div className={clsx(st.main, className)} {...rest}>
				{children}
			</div>
			<div className={st.footer}>footer</div>
		</div>
	);
}
