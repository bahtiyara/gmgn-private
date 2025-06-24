import clsx from 'clsx';
import st from './input.module.scss';
import { useEffect } from 'react';

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

const IconSearch = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 18 18"
		xmlns="http://www.w3.org/2000/svg"
		fill="var(--color-f2)">
		<path d="M14.2909 14.5307C14.5764 14.245 15.0395 14.245 15.325 14.5307L16.9963 16.202C17.2818 16.4875 17.2818 16.9506 16.9963 17.2361C16.7108 17.5216 16.2477 17.5216 15.9622 17.2361L14.2909 15.5648C14.0053 15.2793 14.0053 14.8162 14.2909 14.5307ZM8.20635 2.07261C4.78601 2.07261 2.01328 4.84534 2.01328 8.26568C2.01328 11.686 4.78601 14.4588 8.20635 14.4588C11.6267 14.4588 14.3995 11.686 14.3995 8.26568C14.3995 4.84534 11.6267 2.07261 8.20635 2.07261ZM0.550781 8.26568C0.550781 4.03762 3.9783 0.610107 8.20635 0.610107C12.4344 0.610107 15.862 4.03762 15.862 8.26568C15.862 12.4938 12.4344 15.9213 8.20635 15.9213C3.9783 15.9213 0.550781 12.4938 0.550781 8.26568Z" />
	</svg>
);
