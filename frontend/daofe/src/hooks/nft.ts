import { useAccount, useReadWasmState, useSendMessageWithGas } from '@gear-js/react-hooks';
import { ADDRESS } from '@/consts';
import { Params, Token } from '@/types';
import { useParams } from 'react-router-dom';
const stateMetaWasm= '/static/contracts/dynamic_nft_state.meta.wasm';
const metaTxt ='/static/contracts/dynamic_nft.meta.txt';
import { useMetadata, useWasmMetadata } from './useMetadata';

function useNFTMetadata() {
  return useMetadata(metaTxt);
}

function useNFTState<T>(functionName: string, argument?: any) {
  const { buffer } = useWasmMetadata(stateMetaWasm);
  const programMetadata = useNFTMetadata();

  const result = useReadWasmState<T>({
    programId: ADDRESS.CONTRACT_ADDRESS,
    wasm: buffer,
    programMetadata,
    functionName,
    argument,
    payload: '0x',
  });

  return result;
}

function useNFT() {
  const { id } = useParams() as Params;
  const { state } = useNFTState<Token>('token', id);
  return state;
}

function useNftDynamicInfo() {
  const { id } = useParams() as Params;
  const { state } = useNFTState<Record<string,string>>('token_ext_by_id', id);
  return state||{};
}


function useNFTs() {
  const { state } = useNFTState<Token[]>('all_tokens', null);
  return state;
}

function useOwnerNFTs() {
  const { account } = useAccount();
  const owner = account?.decodedAddress;

  const { state, isStateRead } = useNFTState<Token[]>('tokens_for_owner', owner);

  return { ownerNFTs: state, isOwnerNFTsRead: isStateRead };
}

function useApprovedNFTs() {
  const { account } = useAccount();
  const decodedAddress = account?.decodedAddress;

  const { state, isStateRead } = useNFTState<Token[]>('approved_tokens', decodedAddress);

  return { approvedNFTs: state, isApprovedNFTsRead: isStateRead };
}

function useSendNFTMessage() {
  const meta = useNFTMetadata();
  return useSendMessageWithGas(ADDRESS.CONTRACT_ADDRESS, meta);
}

export { useNFT,useNftDynamicInfo, useNFTs, useOwnerNFTs, useApprovedNFTs, useSendNFTMessage };