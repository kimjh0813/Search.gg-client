import { useCallback } from 'react';

import { getUserInfo } from 'api/search';
import { useQuery } from 'react-query';
import queryClient from 'utils/QueryClient';

interface UserInfoProps {
  userName: string;
}

const useGetUserInfo = (props: UserInfoProps) => {
  const response = useQuery(['USER_INFO', props.userName], async () => {
    if (!props.userName) return;

    const response = await getUserInfo(props.userName);

    return response;
  });

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries(['USER_INFO']);
  }, []);

  return [{ ...response }, invalidate] as const;
};

export default useGetUserInfo;
