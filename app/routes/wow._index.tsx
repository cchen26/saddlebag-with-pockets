import { DocumentSearchIcon } from '@heroicons/react/outline'
import Banner from '~/components/Common/Banner'
import TileLink from '~/components/Common/TileLink'

// Overwrite default meta in the root.tsx
export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title: 'World of Warcraft Auction House Prices, wowhead sod, ',
    description:
      'Addons to make gold in the World of Warcraft Auction House auctionhouse, wowhead sod'
  }
}

// Overwrite default links in the root.tsx
export const links: LinksFunction = () => [
  { rel: 'canonical', href: 'https://saddlebagexchange.com/wow' }
]

const recommendedQueries = [
  // {
  //   name: 'Alpha Build Cross Server Trade Tools',
  //   description:
  //     'Check out the latest and greatest Alpha versions of our server to server trade tools just in time for 10.1.5 cross realm trading!',
  //   Icon: DocumentSearchIcon,
  //   href: 'https://temp.saddlebagexchange.com/',
  //   external: true
  // },
  {
    name: 'Best Deals',
    description:
      'Find the best deals on your server and region wide with our Best Deals search!',
    Icon: DocumentSearchIcon,
    href: '/wow/best-deals/recommended'
  },
  {
    name: 'Ultra Fast Azeroth Auction Assassin Sniper',
    description:
      'Try our standalone Azeroth Auction Assassin Sniper, designed to snipe across all realms for the best deals seconds after the Blizzard AH API updates so you get there first!',
    Icon: DocumentSearchIcon,
    href: 'https://github.com/ff14-advanced-market-search/AzerothAuctionAssassin/releases/latest',
    external: true
  },
  {
    name: 'Price Sniper and Price Spike Alerts',
    description:
      'Alerts you when prices for items go above or below a price you pick! For one server and region wide commodities.',
    Icon: DocumentSearchIcon,
    href: '/wow/price-alert'
  },
  {
    name: 'Upload Timers',
    description:
      'View the time each hour when the Blizzard API AH data updates. This shows which minute the Mega-Alerts will trigger on.',
    Icon: DocumentSearchIcon,
    href: '/wow/upload-timers'
  },
  {
    name: 'Region Export Item Search',
    description:
      'Finds the best servers to sell your items on! This shows you where to sell the items you buy with Best Deals or Mega-Alerts.',
    Icon: DocumentSearchIcon,
    href: '/wow/export-search'
  },
  {
    name: 'Shopping List',
    description: 'Search for the realms with the lowest price for an item.',
    Icon: DocumentSearchIcon,
    href: '/wow/shopping-list'
  },
  {
    name: 'Dragonflight Marketshare Overview',
    description:
      'Find out what Dragonflight items are actually selling and what are the best items to sell. Shows the top 200 items matching your search.',
    Icon: DocumentSearchIcon,
    href: '/wow/marketshare'
  },
  {
    name: 'Legacy Marketshare Overview',
    description:
      'Find out what Legacy items are actually selling and what are the best items to sell. Shows the top 200 items matching your search.',
    Icon: DocumentSearchIcon,
    href: '/wow/legacy-marketshare'
  },
  {
    name: 'Pet Marketshare Overview',
    description:
      'Find out what pets are actually selling and what are the best pets to sell.',
    Icon: DocumentSearchIcon,
    href: '/wow/pet-marketshare'
  },
  {
    name: 'Region Wide Undercut Checker',
    description:
      'Use our Addon with this search to check all of your undercuts on all your alts on one page!',
    Icon: DocumentSearchIcon,
    href: '/wow/region-undercut'
  },
  {
    name: 'Undercut Alerts Curseforge Addon',
    description: 'The addon for our Undercut Checks and Alerts!',
    Icon: DocumentSearchIcon,
    href: 'https://www.curseforge.com/wow/addons/saddlebag-exchange',
    external: true
  },
  {
    name: 'Server Transfer Trading Search',
    description:
      'Search for items that can be bought cheaply on a your home server and sold for a profit when transfering realms.',
    Icon: DocumentSearchIcon,
    href: '/wow/full-scan'
  },
  {
    name: 'Dragonflight Commodity Shortage Futures',
    description:
      'Find Commodity Shortages and Price Spikes BEFORE they happen and be there first!',
    Icon: DocumentSearchIcon,
    href: '/wow/shortage-predictor'
  },
  {
    name: 'Local Realm Shortage Finder',
    description:
      'Searches for items on your local server / realm that you can flip and take over the market!',
    Icon: DocumentSearchIcon,
    href: '/wow/shortages/single'
  },
  {
    name: 'Commodity Shortage Finder',
    description:
      'Searches for region wide commodities that you can flip and take over the market!',
    Icon: DocumentSearchIcon,
    href: '/wow/shortages/commodities'
  }
]

export default function Index() {
  return (
    <>
      <main className="flex-1">
        <Banner />
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-blue-900 dark:text-gray-100">
              World of Warcraft Queries
            </h1>
            <div
              className={`not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2`}>
              {recommendedQueries.map((query) => {
                return <TileLink key={query.name} {...query} />
              })}
            </div>
          </div>
        </div>
        <p style={{ fontSize: '1px' }}>
          Google Keywords: wow classic hardcore addons, best sod addons wow, wow
          classic hardcore addon, wow sod addons, wow coordinates addon, wow
          hardcore addons, classic wow voice over addon, quest addon wow, wow
          3.3.5 addons, wow addon healer wow controller addon, wow leveling
          addon, wow quest addon, best healing addon wow, swing timer addon
          classic wow nate silver twitter, r/woweconomy, r/wow, wowhead sod,
          world of warcraft expansions in order, fyrakk assault bugged, world of
          warcraft hairstyles, wowhead dragonflight battle net login, wor craft,
          wow classic reddit, blizzard store, reddit classic wow, wow expansions
          in order, blizzard gear store, meme world of warcraft, r world, reddit
          wow classic blizzard.com link, battle.net account, lich king, wow
          expansions, wow+, wowhead wotlk, blizzard launcher, classic wow, south
          park world of warcraft, world of warcraft classic hardcore
        </p>
      </main>
    </>
  )
}
