import { API, type GetTokensResp } from '@/api';
import { create } from 'zustand';

type State = {
	token: GetTokensResp | null;
	fetchTokens: () => number;
};

export const useTokenStore = create<State>((set) => ({
	token: null,
	fetchTokens: () => {
		let intervalId = 0;

		const func = async () => {
			const res = await API.getTokens();

			res.completed.sort(() => Math.random() - 0.5);
			res.new_creation.sort(() => Math.random() - 0.5);
			res.pump.sort(() => Math.random() - 0.5);

			set({ token: res });
		};

		func();
		intervalId = window.setInterval(() => {
			func();
		}, 1000);

		return intervalId;
	},
}));
