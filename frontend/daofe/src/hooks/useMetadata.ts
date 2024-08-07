import { useEffect, useState } from 'react';
import { ProgramMetadata } from '@gear-js/api';
import { Buffer } from 'buffer';
import { useAlert } from '@gear-js/react-hooks';
import { fetchData } from '@/utils';

export const useMetadata = (source: RequestInfo | URL) => {
  const [data, setData] = useState<ProgramMetadata>();

  useEffect(() => {
    fetchData(source)
      .then((res) => res.text() as Promise<string>)
      .then((raw) => ProgramMetadata.from(`0x${raw}`))
      .then((meta) => setData(meta));
  }, [source]);

  return data;
};

export const useWasmMetadata = (source: RequestInfo | URL) => {
  const alert = useAlert();
  const [data, setData] = useState<Buffer>();

  useEffect(() => {
    if (source) {
      fetchData(source)
        .then((response) => response.arrayBuffer())
        .then((array) => Buffer.from(array))
        .then((buffer) => setData(buffer))
        .catch(({ message }: Error) => alert.error(`Fetch error: ${message}`));
    }
  }, [source]);

  return { buffer: data };
};