import clsx from 'clsx';
import st from './input.module.scss';
import { useEffect } from 'react';
import { IconSearch } from '@/icons/search';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	wrapperStyle?: React.CSSProperties;
	wrapperClassName?: string;
	onValueChange?: (value: string) => void;
};

export function Input(props: Props) {
	const {
		className,
		wrapperStyle,
		onValueChange,
		onChange,
		wrapperClassName,
		...rest
	} = props;

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key !== 'k' || !e.metaKey) return;

			const inputs = document.querySelectorAll(`.${st.input}`);

			if (inputs.length === 0) return;

			const el = inputs[inputs.length - 1] as HTMLInputElement;

			if (document.activeElement?.classList.contains(st.input)) {
				// was focused on input
				el.blur();
			} else {
				// was focused on document
				el.focus();
				el.select();
			}
		}
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div
			className={clsx(st.inputWrapper, wrapperClassName)}
			style={wrapperStyle}>
			<IconSearch />
			<input
				{...rest}
				onChange={(e) => {
					onChange?.(e);
					onValueChange?.(e.target.value);
				}}
				className={clsx(st.input, className)}
			/>
			<span className={st.right}>⌘K</span>
		</div>
	);
}
