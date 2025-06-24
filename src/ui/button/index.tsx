import clsx from 'clsx';
import st from './button.module.scss';

type CustomProps = {
	type?: 'secondary' | 'primary';
};
type Props = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	keyof CustomProps
> &
	CustomProps;

export function Button(props: Props) {
	const { type = 'secondary', className, ...rest } = props;

	return <button className={clsx(st.button, st[type], className)} {...rest} />;
}
