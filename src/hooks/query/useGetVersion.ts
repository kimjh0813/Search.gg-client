import { useCallback } from 'react';

import { getGameVersion } from 'api/search';
import { useQuery } from 'react-query';
import queryClient from 'utils/QueryClient';

const useGetVersion = () => {
  const response = useQuery(['GAME_VERSION'], async () => {
    const response = await getGameVersion();

    return response;
  });

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries(['GAME_VERSION']);
  }, []);

  return [{ ...response }, invalidate] as const;
};

export default useGetVersion;
