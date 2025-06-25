import tokenData from './data/tokens.json';

export type Token = (typeof tokenData.new_creation)[0];
export type GetTokensResp = {
	completed: Token[];
	new_creation: Token[];
	pump: Token[];
};

export const API = {
	getTokens: () =>
		new Promise<GetTokensResp>((resolve) => {
			setTimeout(() => {
				resolve(tokenData);
			}, 10);
		}),
};
