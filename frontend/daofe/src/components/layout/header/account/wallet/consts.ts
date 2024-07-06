import polkadotsvg from './assets/polkadot.svg?url';
import subwalletsvg from './assets/subwallet.svg?url';
import talismansvg from './assets/talisman.svg?url';
import enkryptsvg from './assets/enkrypt.svg?url';

type WalletItem = {
  name: string;
  svgicon: any;
};

const WALLET: Record<string, WalletItem> = {
  'polkadot-js': { name: 'Polkadot JS', svgicon:polkadotsvg },
  'subwallet-js': { name: 'SubWallet', svgicon:subwalletsvg },
  talisman: { name: 'Talisman', svgicon:talismansvg },
  enkrypt: { name: 'Enkrypt',svgicon:enkryptsvg },
};

const WALLETS = Object.entries(WALLET);

export { WALLET, WALLETS };
