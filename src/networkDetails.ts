import arbitrum from "./assets/arbitrum.png";
import avalanche from "./assets/tokens/AVAX.svg";
import polygon from "./assets/tokens/matic.svg";
import ethereum from "./assets/tokens/wETH.svg";
import { EnvHelper } from "./helpers/Environment";
import { NodeHelper } from "./helpers/NodeHelper";

export enum NetworkId {
  MAINNET = 1,
  TESTNET_RINKEBY = 4,

  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 421611,

  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,

  POLYGON = 137,
  POLYGON_TESTNET = 80001,

  FANTOM = 250,
  FANTOM_TESTNET = 4002,

  Localhost = 1337,
}

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  [NetworkId.TESTNET_RINKEBY]: {
    DAI_ADDRESS: "0x2282eD292D0833de65a92f7B4D20aaaD5B26ABf2", // duplicate
    OHM_ADDRESS: "0x7AFAf6BFAeB3C8B36d05e76b0896DD0Fd6Bdb5C1",
    STAKING_ADDRESS: "0x7f57E7bea297Dbb3AFABB5a870B47e96B3d90e85",
    STAKING_HELPER_ADDRESS: "0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1",
    OLD_STAKING_ADDRESS: "0x7f57E7bea297Dbb3AFABB5a870B47e96B3d90e85",
    SOHM_ADDRESS: "0x2dD6d36ef0450bF32434165C585a61Dc21B23551",
    WSOHM_ADDRESS: "0x2dD6d36ef0450bF32434165C585a61Dc21B23551",
    OLD_SOHM_ADDRESS: "0x2dD6d36ef0450bF32434165C585a61Dc21B23551",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x52538F2964514a07664b23a165d535A7c7FDd534",
    BONDINGCALC_ADDRESS: "0x99cEda88a6F7b3d9036eDAdF86bDf6B2263e072D",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x6e40178c0f95aA642A1D20F5e1CDB3bB7fB33DD0",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
    GIVING_ADDRESS: "0x83D4FE6Ead62547758E094ee5BDb343ADbC2AeB9",
    MOCK_GIVING_ADDRESS: "0xfC93B6fC25D751ef1141EAB01C3f51Ecd484Ba05",
    MOCK_SOHM: "0x22C0b7Dc53a4caa95fEAbb05ea0729995a10D727",
    MIGRATOR_ADDRESS: "0x568c257BF4714864382b643fC8e6Ce5fbBcC6d3C",
    GOHM_ADDRESS: "0x36F82C56D235Df83e267017b1501BC5a86ac14b2",
    OHM_V2: "0x7AFAf6BFAeB3C8B36d05e76b0896DD0Fd6Bdb5C1",
    TREASURY_V2: "0x6e40178c0f95aA642A1D20F5e1CDB3bB7fB33DD0",
    SOHM_V2: "0x2dD6d36ef0450bF32434165C585a61Dc21B23551",
    STAKING_V2: "0x7f57E7bea297Dbb3AFABB5a870B47e96B3d90e85",
    BOND_DEPOSITORY: "0x709B2876f77925a6392ec66313F82F65d358B3dB",
    DAO_TREASURY: "0x49A61ba8E25FBd58cE9B30E1276c4Eb41dD80a80",
  },
  [NetworkId.MAINNET]: {
    DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
    OHM_ADDRESS: "0xe7DA1d8327AE1F320BbC23ca119b02AD3f85dceB",
    STAKING_ADDRESS: "0x51b5cC83DD03e5aB10FdF06Bdd9EbBB7ef1B8c76", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x51b5cC83DD03e5aB10FdF06Bdd9EbBB7ef1B8c76", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x51b5cC83DD03e5aB10FdF06Bdd9EbBB7ef1B8c76",
    SOHM_ADDRESS: "0x76B7B4062d7b518C79f324b6F1f9Cc4E10ABD27F",
    WSOHM_ADDRESS: "0x76B7B4062d7b518C79f324b6F1f9Cc4E10ABD27F",
    OLD_SOHM_ADDRESS: "0x76B7B4062d7b518C79f324b6F1f9Cc4E10ABD27F",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0xE1d162403f3157300fFE0E70aD59864F0F799fFD",
    BONDINGCALC_ADDRESS: "0x45981AF41f0AFFbB14c63888e3Cd10D4AA0C500B",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0xD088F31a21252308640CF9B6E70a13A7D79A56Ee",
    REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
    FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    FUSE_36_SOHM: "0x252d447c54F33e033AD04048baEAdE7628cB1274", // Fraximalist Money Market
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
    ZAPPER_POOL_V1: "0x76B7B4062d7b518C79f324b6F1f9Cc4E10ABD27F",
    BONDINGCALC_V2: "0x45981AF41f0AFFbB14c63888e3Cd10D4AA0C500B",
    MIGRATOR_ADDRESS: "0x184f3FAd8618a6F458C16bae63F70C426fE784B3",
    GOHM_ADDRESS: "0xfbf24289d776899482bf7aC33dEF116C4a551Fed",
    OHM_V2: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
    TREASURY_V2: "0x9a315bdf513367c0377fb36545857d12e85813ef",
    SOHM_V2: "0x04906695D6D12CF5459975d7C3C03356E4Ccd460",
    STAKING_V2: "0xB63cac384247597756545b500253ff8E607a8020",
    FIATDAO_WSOHM_ADDRESS: "0xe98ae8cD25CDC06562c29231Db339d17D02Fd486",
    GIVING_ADDRESS: "0x2604170762A1dD22BB4F96C963043Cd4FC358f18",
    BOND_DEPOSITORY: "0xcDc59231032737190aF627d2A7e643ED210426fC", // updated
    DAO_TREASURY: "0x5c656F5e8c44f6Df504DFb3E224E7f01310Aa52c",
    TOKEMAK_GOHM: "0x41f6a95bacf9bc43704c4a4902ba5473a8b00263",
  },
  [NetworkId.ARBITRUM]: {
    DAI_ADDRESS: "", // duplicate
    OHM_ADDRESS: "",
    STAKING_ADDRESS: "", // The new staking contract
    STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    WSOHM_ADDRESS: "0x739ca6D71365a08f584c8FC4e1029045Fa8ABC4B",
    MIGRATOR_ADDRESS: "0x1e7902a8b0adbf81042b5e30bdfa281f0b928d6d", // good
    GOHM_ADDRESS: "0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1", // good
    REDEEM_HELPER_ADDRESS: "",
  }, // TODO: Replace with Arbitrum contract addresses when ready
  [NetworkId.ARBITRUM_TESTNET]: {
    DAI_ADDRESS: "",
    OHM_ADDRESS: "",
    STAKING_ADDRESS: "",
    STAKING_HELPER_ADDRESS: "",
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    REDEEM_HELPER_ADDRESS: "",
    WSOHM_ADDRESS: "0x3DE0150338BDeE175a8EAc6fBbBF2c55279454d5",
    MIGRATOR_ADDRESS: "0xde9518c8444Fa436704Fbd9db27B3910bca9F532",
    GOHM_ADDRESS: "0x950c3626B9E9798aA1a4832cEee603ECfb7741a8",
  },
  [NetworkId.AVALANCHE_TESTNET]: {
    DAI_ADDRESS: "",
    OHM_ADDRESS: "",
    STAKING_ADDRESS: "",
    STAKING_HELPER_ADDRESS: "",
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    PICKLE_OHM_LUSD_ADDRESS: "",
    REDEEM_HELPER_ADDRESS: "",
    WSOHM_ADDRESS: "0x8e8ffc8d41Ee4A915A1FB3940b1beAB0c2Cd5bB0",
    GOHM_ADDRESS: "0x115E5979435c89eF38fB87C2D7Fc3BCA09053c54",
    MIGRATOR_ADDRESS: "0x9050D25977F8A19CDD5599A28bC5f55d39fb6105",
  },
  [NetworkId.AVALANCHE]: {
    DAI_ADDRESS: "",
    OHM_ADDRESS: "",
    // STAKING_ADDRESS: "", // The new staking contract
    STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    PICKLE_OHM_LUSD_ADDRESS: "",
    REDEEM_HELPER_ADDRESS: "",
    WSOHM_ADDRESS: "0x8cd309e14575203535ef120b5b0ab4dded0c2073",
    GOHM_ADDRESS: "0x321e7092a180bb43555132ec53aaa65a5bf84251",
    MIGRATOR_ADDRESS: "0xB10209BFbb37d38EC1B5F0c964e489564e223ea7",
  }, // TODO: Avalanche Mainnet addresses
  [NetworkId.POLYGON]: {
    GOHM_ADDRESS: "0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195",
  },
  [NetworkId.FANTOM]: {
    GOHM_ADDRESS: "0x91fa20244fb509e8289ca630e5db3e9166233fdc",
  },
};

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */

interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  image: SVGImageElement | string;
  imageAltText: string;
  uri: () => string;
}

// These networks will be available for users to select. Other networks may be functional
// (e.g. testnets, or mainnets being prepared for launch) but need to be selected directly via the wallet.
export const USER_SELECTABLE_NETWORKS = [NetworkId.MAINNET, NetworkId.ARBITRUM, NetworkId.AVALANCHE];

// Set this to the chain number of the most recently added network in order to enable the 'Now supporting X network'
// message in the UI. Set to -1 if we don't want to display the message at the current time.
export const NEWEST_NETWORK_ID = NetworkId.AVALANCHE;

export const NETWORKS: { [key: number]: INetwork } = {
  [NetworkId.MAINNET]: {
    chainName: "Ethereum",
    chainId: 1,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.MAINNET),
  },
  [NetworkId.TESTNET_RINKEBY]: {
    chainName: "Rinkeby Testnet",
    chainId: 4,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.TESTNET_RINKEBY),
  },
  [NetworkId.ARBITRUM]: {
    chainName: "Arbitrum",
    chainId: 42161,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.ARBITRUM),
  },
  [NetworkId.ARBITRUM_TESTNET]: {
    chainName: "Arbitrum Testnet",
    chainId: 421611,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => EnvHelper.alchemyArbitrumTestnetURI,
  },
  [NetworkId.AVALANCHE_TESTNET]: {
    chainName: "Avalanche Fuji Testnet",
    chainId: 43113,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://testnet.snowtrace.io/#/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => EnvHelper.alchemyAvalancheTestnetURI,
  },
  [NetworkId.AVALANCHE]: {
    chainName: "Avalanche",
    chainId: 43114,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.AVALANCHE),
  },
  [NetworkId.POLYGON]: {
    chainName: "Polygon",
    chainId: 137,
    nativeCurrency: {
      name: "Polygon",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://polygonscan.com/"],
    image: polygon,
    imageAltText: "Polygon Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.POLYGON),
  },
  [NetworkId.POLYGON_TESTNET]: {
    chainName: "Polygon Mumbai Testnet",
    chainId: 80001,
    nativeCurrency: {
      name: "Polygon",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    image: polygon,
    imageAltText: "Polygon Logo",
    uri: () => "", // NodeHelper.getMainnetURI(NetworkId.POLYGON_TESTNET),
  },
};

// VIEWS FOR NETWORK is used to denote which paths should be viewable on each network
// ... attempting to prevent contract calls that can't complete & prevent user's from getting
// ... stuck on the wrong view

interface IViewsForNetwork {
  dashboard: boolean;
  stake: boolean;
  wrap: boolean;
  zap: boolean;
  threeTogether: boolean;
  bonds: boolean;
  network: boolean;
  bondsV2: boolean;
}

export const VIEWS_FOR_NETWORK: { [key: number]: IViewsForNetwork } = {
  [NetworkId.MAINNET]: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
    bondsV2: true,
  },
  [NetworkId.TESTNET_RINKEBY]: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
    bondsV2: true,
  },
  [NetworkId.ARBITRUM]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
    bondsV2: false,
  },
  [NetworkId.ARBITRUM_TESTNET]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
    bondsV2: false,
  },
  [NetworkId.AVALANCHE]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
    bondsV2: false,
  },
  [NetworkId.AVALANCHE_TESTNET]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
    bondsV2: false,
  },
};
