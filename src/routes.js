import CurrentSeason from './pages/CurrentSeason'
import Download from './pages/Download'
import Home from './pages/Home'
import News from './pages/News'
import SeasonArchive from './pages/SeasonArchive'
import SeasonPass from './pages/SeasonPass'
import {
	CURRENT_SEASON_ROUTE,
	DOWNLOAD_ROUTE,
	HOME_ROUTE,
	NEWS_ROUTE,
	SEASON_ARCHIVE_ROUTE,
	SEASON_PASS_ROUTE,
} from './utils/consts'

export const routes = [
	{
		path: HOME_ROUTE,
		Element: <Home />,
	},
	{
		path: DOWNLOAD_ROUTE,
		Element: <Download />,
	},
	{
		path: NEWS_ROUTE,
		Element: <News />,
	},
	{
		path: CURRENT_SEASON_ROUTE,
		Element: <CurrentSeason />,
	},
	{
		path: SEASON_ARCHIVE_ROUTE,
		Element: <SeasonArchive />,
	},
	{
		path: SEASON_PASS_ROUTE,
		Element: <SeasonPass />,
	},
]
