import { IconSole } from '@/icons/sol';
import st from './footer.module.scss';
import {
	IconApi,
	IconApp,
	IconBars,
	IconBell,
	IconBot,
	IconDiscord,
	IconEarth,
	IconEducation,
	IconStatistics,
	IconTelegram,
	IconX,
} from './icons';

export function Footer() {
	return (
		<div className={st.footer}>
			<div className={st.left}>
				<div className={st.button}>
					<IconBell />
					<span>Wallet Tracker</span>
				</div>
				<div className={st.button}>
					<IconStatistics />
					<span>Holding</span>
				</div>
				<div className={st.button}>
					<IconBars />
					<span>PnL</span>
				</div>
				<div className={st.solana}>
					<IconSole />
					<span>$143.33</span>
				</div>
			</div>
			<div className={st.right}>
				<div
					className={st.button}
					style={{
						backgroundColor: 'rgba(122, 238, 160, 0.12)',
						color: 'rgb(158, 229, 181)',
						marginRight: '-0.5px',
					}}>
					<div
						style={{
							width: 12,
							height: 12,
							backgroundColor: 'rgb(158, 229, 181)',
							borderRadius: 46,
							border: '2px solid #314637',
						}}
					/>
					<span>Stable</span>
				</div>
				<div className={st.button}>
					<IconEducation />
					<span>Tutorial</span>
				</div>
				<div className={st.button}>
					<IconEarth />
					<span>About</span>
				</div>
				<div className={st.button}>
					<IconBot />
					<span>Bot</span>
				</div>
				<div className={st.button}>
					<IconApi />
					<span>API</span>
				</div>
				<div className={st.button}>
					<IconX />
				</div>
				<div className={st.button}>
					<IconTelegram />
				</div>
				<div className={st.button}>
					<IconDiscord />
				</div>
				<div className={st.button}>
					<img src="/img/gift.webp" />
					<span>Refer</span>
				</div>
				<div className={st.button}>
					<img src="/img/ic_contest.png" />
					<span>Contest</span>
					<img src="/img/foot_s6.png" style={{ width: 16, borderRadius: 4 }} />
				</div>
				<div className={st.button}>
					<IconApp />
					<span>APP</span>
				</div>
			</div>
		</div>
	);
}
