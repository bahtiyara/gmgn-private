import { HoldingPage } from '@/pages/holding';
import { HomePage } from '@/pages/home';
import { MonitorPage } from '@/pages/monitor';
import { NewPairPage } from '@/pages/new-pair';
import { TrackPage } from '@/pages/track';
import { TradePage } from '@/pages/trade';
import { TrendPage } from '@/pages/trend';

export const navData = [
	{ name: 'Trenches', path: '/', element: <HomePage /> },
	{ name: 'New pair', path: '/new-pair', element: <NewPairPage /> },
	{ name: 'Trending', path: '/trend', element: <TrendPage /> },
	{ name: 'CopyTrade', path: '/trade', element: <TradePage /> },
	{ name: 'Monitor', path: '/monitor', element: <MonitorPage /> },
	{ name: 'Track', path: '/track', element: <TrackPage /> },
	{ name: 'Holding', path: '/holding', element: <HoldingPage /> },
];
