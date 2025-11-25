// used to mark unsupported tokens, these are hosted lists of unsupported tokens

export const UNSUPPORTED_LIST_URLS: string[] = []
export const GOAT_TESTNET_LIST = 'https://assets.goatswap.fi/goat_testnet_goat_tokens.json'
export const GOAT_LIST = 'https://raw.githubusercontent.com/SpookySwapV3/token-lists/refs/heads/main/Goat/goat_tokens.json'
export const MONAD_LIST = 'https://raw.githubusercontent.com/SpookySwapV3/token-lists/refs/heads/main/Monad/monad_tokens.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  // GOAT_TESTNET_LIST,
  MONAD_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [MONAD_LIST]
