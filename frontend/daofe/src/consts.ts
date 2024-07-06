const ADDRESS = {
  NODE: import.meta.env.VITE_APP_NODE_ADDRESS as string,
  IPFS: import.meta.env.VITE_APP_IPFS_ADDRESS as string,
  AUTH_HEADER: import.meta.env.VITE_APP_CRUST_AUTH_HEADER as string,
  IPFS_GATEWAY: import.meta.env.VITE_APP_IPFS_GATEWAY_ADDRESS as string,
  CONTRACT_ADDRESS: import.meta.env.VITE_APP_CONTRACT_ADDRESS as `0x${string}`,
  TICKET_CONTRACT_ADDRESS: import.meta.env.VITE_APP_TICKET_CONTRACT_ADDRESS as `0x${string}`,
};

console.log('address==',ADDRESS);

const LOCAL_STORAGE = {
  ACCOUNT: 'account',
};

const FILTERS = ['All', 'My', 'Approved'];

export { ADDRESS, LOCAL_STORAGE, FILTERS };
