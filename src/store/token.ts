import { API, type Token } from '@/api';
import { create } from 'zustand';

type State = {
	tokens: { title: string; data: Token[] }[] | null;
	fetchTokens: () => void;
};

export const useTokenStore = create<State>((set) => ({
	tokens: null,
	fetchTokens: () => {
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
	},
}));
