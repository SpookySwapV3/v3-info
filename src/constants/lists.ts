// used to mark unsupported tokens, these are hosted lists of unsupported tokens

export const UNSUPPORTED_LIST_URLS: string[] = []
export const OPTIMISM_LIST = ''
export const ARBITRUM_LIST = ''
export const POLYGON_LIST = ''
export const CELO_LIST = ''
export const BNB_LIST = ''
export const FANTOM_LIST = 'https://assets.spooky.fi/ftm_spooky_tokens.json'
export const EON_LIST = 'https://assets.spooky.fi/eon_spooky_tokens.json'
export const BTTC_LIST = 'https://assets.spooky.fi/btt_spooky_tokens.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  BTTC_LIST,
  EON_LIST,
  FANTOM_LIST,
  OPTIMISM_LIST,
  ARBITRUM_LIST,
  POLYGON_LIST,
  CELO_LIST,
  BNB_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [
  BTTC_LIST,
  EON_LIST,
  FANTOM_LIST,
  OPTIMISM_LIST,
  ARBITRUM_LIST,
  POLYGON_LIST,
  CELO_LIST,
  BNB_LIST,
]
