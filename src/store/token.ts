import { API, type Token } from '@/api';
import { create } from 'zustand';

type State = {
	tokens: { title: string; data: Token[] }[] | null;
	fetchTokens: () => number;
};

export const useTokenStore = create<State>((set) => ({
	tokens: null,
	fetchTokens: () => {
		let intervalId = 0;

		const func = async () => {
			const res = await API.getTokens();

			res.completed.sort(() => Math.random() - 0.5);
			res.new_creation.sort(() => Math.random() - 0.5);
			res.pump.sort(() => Math.random() - 0.5);

			set({
				tokens: [
					{ title: '🌱 New Creations', data: res.new_creation },
					{ title: '🕛 Completing', data: res.completed },
					{ title: '🐣 Completed', data: res.pump },
				],
			});
		};

		func();
		// intervalId = window.setInterval(() => {
		// 	func();
		// }, 1000);

		return intervalId;
	},
}));
