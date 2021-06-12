// Config token list here
const DEFAULT_LIST = {
	"name": "foodcourt.finance",
	"timestamp": "2021-05-06T09:56:23Z",
	"version": {
		"major": 1,
		"minor": 1,
		"patch": 0
	},
	"tags": {},
	"logoURI": "/images/foodcourt-finance.png",
	"keywords": ["foodcourt", "default"],
	"tokens": [
		{
			"name": "WKUB Token",
			"symbol": "WKUB",
			"address": "0xDa91a1aee4d7829c118cD6218CDA2cB2C56dd010",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/0xDa91a1aee4d7829c118cD6218CDA2cB2Caaaa56dd010.png"
		},
		{
			"name": "TukTuk",
			"symbol": "TUK",
			"address": "0xAAD64d9b17f86b3ba803369b0d59392b3744ab13",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/0xAAD64d9b17f86b3ba803369b0d59392b3744ab13.png"
		},
		{
			"name": "KillSwitch-Peg WMMP Token",
			"symbol": "kMMP",
			"address": "0x8bBB504B8a0e855f0F504F8D07061270aa40F928",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/0x8bBB504B8a0e855f0F504F8D07061270aa40F928.png"
		},
		{
			"name": "KillSwitch-Peg BNB Token",
			"symbol": "kBNB",
			"address": "0x7E7a450fE8BA3d6f551B3912Fa2765F923b89C5D",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/0x7E7a450fE8BA3d6f551B3912Fa2765F923b89C5D.png"
		},
		{
			"name": "KillSwitch-Peg DOLLY Token",
			"symbol": "kDOLLY",
			"address": "0xDD2bb4e845Bd97580020d8F9F58Ec95Bf549c3D9",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/dolly.svg"
		},
		{
			"name": "KillSwitch-Peg UST Token",
			"symbol": "kUST",
			"address": "0x2920712a36270ba6C48a3D23998D6CFbbe0A677B",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/0x2920712a36270ba6C48a3D23998D6CFbbe0A677B.png"
		},
		{
			"name": "KillSwitch-Peg DAI Token",
			"symbol": "kDAI",
			"address": "0xED7B8606270295d1b3b60b99c051de4D7D2f7ff2",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/0xED7B8606270295d1b3b60b99c051de4D7D2f7ff2.png"
		},
		{
			"name": "MoonMaiKub Token",
			"symbol": "MMK",
			"address": "0x72be06dc52dcb44ed330967bc10D97e1C08F7E07",
			"chainId": 96,
			"decimals": 18,
			"logoURI": "/images/coins/0x72be06dc52dcb44ed330967bc10D97e1C08F7E07.png"
		},
	]
}

// Below this is for config center token
const ChainId = {
  MAINNET: 96,
  BSCTESTNET: 97,
}

const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xDa91a1aee4d7829c118cD6218CDA2cB2C56dd010',
    18,
    'WKUB',
    'Wrapped KUB'
  ),
  [ChainId.BSCTESTNET]: new Token(
    ChainId.BSCTESTNET,
    '0xc5b8848ED88B5498943e5365e8E632dBeb7e75f8',
    18,
    'WKUB',
    'Wrapped KUB'
  )
}

const WBNB = {
	[ChainId.MAINNET]: new Token(
		ChainId.MAINNET,
		'0xDa91a1aee4d7829c118cD6218CDA2cB2C56dd010',
		18,
		'WKUB',
		'Wrapped KUB',
	),
	[ChainId.BSCTESTNET]: new Token(
		ChainId.BSCTESTNET,
		'0xc5b8848ED88B5498943e5365e8E632dBeb7e75f8',
		18,
		'WKUB',
		'Wrapped KUB',
	),
}

const KDOLLY = {
	[ChainId.MAINNET]: new Token(
		ChainId.MAINNET,
		'0xDD2bb4e845Bd97580020d8F9F58Ec95Bf549c3D9',
		18,
		'kDolly',
		'KillSwitch-Peg DOLLY Token',
	),
	[ChainId.BSCTESTNET]: new Token(
		ChainId.BSCTESTNET,
		'0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
		18,
		'kDolly',
		'KillSwitch-Peg DOLLY Token',
	),
}

const DAI = {
	[ChainId.MAINNET]: new Token(
		ChainId.MAINNET,
		'0xED7B8606270295d1b3b60b99c051de4D7D2f7ff2',
		18,
		'kDAI',
		'KillSwitch-Peg DAI Token',
	),
	[ChainId.BSCTESTNET]: new Token(
		ChainId.BSCTESTNET,
		'0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
		18,
		'kDAI',
		'KillSwitch-Peg DAI Token',
	),
}

const UST = {
	[ChainId.MAINNET]: new Token(
		ChainId.MAINNET,
		'0x2920712a36270ba6C48a3D23998D6CFbbe0A677B',
		18,
		'kUST',
		'KillSwitch-Peg UST Token',
	),
	[ChainId.BSCTESTNET]: new Token(
		ChainId.BSCTESTNET,
		'0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
		18,
		'kUST',
		'KillSwitch-Peg UST Token',
	),
}

const CENTER_TOKENS = {
	[ChainId.MAINNET]: [
		WETH[ChainId.MAINNET],
		KDOLLY[ChainId.MAINNET],
		DAI[ChainId.MAINNET],
		UST[ChainId.MAINNET],
	],
	[ChainId.BSCTESTNET]: [
		WETH[ChainId.BSCTESTNET],
		KDOLLY[ChainId.BSCTESTNET],
		DAI[ChainId.BSCTESTNET],
		UST[ChainId.BSCTESTNET],
	],
}

// Do not touch anything below
window.localStorage.setItem("DEFAULT_LIST", JSON.stringify(DEFAULT_LIST));
window.localStorage.setItem("CENTER_TOKENS", JSON.stringify(CENTER_TOKENS));
