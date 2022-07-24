import CurrentSeason from './pages/CurrentSeason'
import Download from './pages/Download'
import Home from './pages/Home'
import News from './pages/News'
import SeasonArchive from './pages/SeasonArchive'
import SeasonPass from './pages/SeasonPass'
import RulesAndGuidelines from './pages/RulesAndGuidelines'
import Eula from './pages/Eula'
import {
	CURRENT_SEASON_ROUTE,
	DOWNLOAD_ROUTE,
	EULA_ROUTE,
	HOME_ROUTE,
	NEWS_ROUTE,
	RULES_AND_GUIDELINES,
	RULES_AND_GUIDELINES_ROUTE,
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
	{
		path: EULA_ROUTE,
		Element: <Eula />,
	},
	{
		path: RULES_AND_GUIDELINES_ROUTE,
		Element: <RulesAndGuidelines />,
	},
]
