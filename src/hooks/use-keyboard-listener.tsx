import { useEffect } from 'react';

type KeyParam = {
	[key: string]: () => void;
};

type KeyboardEventName = keyof Pick<
	GlobalEventHandlersEventMap,
	'keydown' | 'keyup'
>;

export function useKeyboardListener(
	keyParam: KeyParam,
	eventName: KeyboardEventName = 'keyup',
) {
	useEffect(() => {
		window.addEventListener(eventName, handler);
		return () => {
			window.removeEventListener(eventName, handler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handler(event: KeyboardEvent) {
		for (const [key, func] of Object.entries(keyParam)) {
			if (event.key === key) {
				func();
			}
		}
	}
}
