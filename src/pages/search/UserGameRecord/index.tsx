import RecordItem from 'components/RecordItem';
import type { UserInfo } from 'types/search';

const UserGameRecord = ({ userInfo }: { userInfo: UserInfo }) => {
  return (
    <div>
      <RecordItem />
    </div>
  );
};

export default UserGameRecord;
