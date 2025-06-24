import type { Token } from '@/api';
import st from './token-item.module.scss';

type Props = {
	data: Token;
};

export function TokenItem({ data }: Props) {
	const { name } = data;

	return <div className={st.item}>{name}</div>;
}
