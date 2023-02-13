import { useCallback } from 'react';

import { getUserTier } from 'api/search';
import { useQuery } from 'react-query';
import queryClient from 'utils/QueryClient';

interface UserTierProps {
  userId: string;
}

const useGetTierInfo = ({ userId }: UserTierProps) => {
  const response = useQuery(['USER_TIER'], async () => {
    const response = await getUserTier(userId);

    return response;
  });

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries(['USER_TIER']);
  }, []);

  return [{ ...response }, invalidate] as const;
};

export default useGetTierInfo;
