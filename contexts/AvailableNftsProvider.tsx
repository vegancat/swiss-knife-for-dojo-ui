import {
  useMemo,
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import _ from "lodash";

type ContextType = {
  nfts: any[];
};

const AvailableNftsContext = createContext<ContextType>({
  nfts: [],
});
function AvailableNftsProvider({ children }: PropsWithChildren) {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [fetchedNfts, setFetchedNfts] = useState([]);

  const rpcUrl =
    process.env.SOLANA_MAINNET_RPC ||
    "https://withered-wider-research.solana-mainnet.quiknode.pro/";

  useEffect(() => {
    if (_.isNil(rpcUrl)) return;

    const fetchNfts = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = {
        jsonrpc: "2.0",
        id: 1,
        method: "qn_fetchNFTs",
        params: {
          // wallet: publicKey.toBase58(),
          wallet: "6DdpRzKBRiQQkpG2ueZC5u6rMkXMyC55S8CmGocLmmgJ",
          omitFields: ["provenance", "traits"],
          page: 1,
          perPage: 40,
        },
      };
      axios
        .post(rpcUrl, data, config)
        .then(function (response) {
          // handle success
          console.log(response.data);

          const filteredNfts = response.data.result.assets.filter(
            (asset: any) =>
              asset.collectionAddress ==
              "H3sX9GvYR9W3MfvfsYT8LTEhB9WktxgY3Pu9XmwB9uhW"
          );
          console.log(
            "🚀 ~ file: AvailableNftsProvider.tsx:58 ~ filteredNfts",
            filteredNfts
          );

          setFetchedNfts(filteredNfts);
        })
        .catch((err) => {
          // handle error
          console.log(err);
        });
    };

    fetchNfts();

    return () => {
      setFetchedNfts([]);
    };
  }, [publicKey, connection, rpcUrl]);

  const contextValue = useMemo(() => {
    return {
      nfts: fetchedNfts,
    };
  }, [fetchedNfts]);
  return (
    <AvailableNftsContext.Provider value={contextValue}>
      {children}
    </AvailableNftsContext.Provider>
  );
}

export const useAvailableNftsContext = () => {
  return useContext(AvailableNftsContext);
};

export default AvailableNftsProvider;
