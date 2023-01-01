import { Link } from 'react-router-dom';

interface CommunityItems {
  id: number;
  img: string;
  title: string;
  period: string;
  name: string;
  recommandCount: number;
}

const CommunityItems: CommunityItems[] = [
  {
    id: 1,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 2,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 3,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 4,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 5,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 6,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 7,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 8,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 9,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
  {
    id: 10,
    img: 'img',
    title: '제목',
    period: '하루 전',
    name: '만든사람',
    recommandCount: 1,
  },
];

const HomeListItem = () => {
  return (
    <div className="h-80">
      <div className="h-full grid grid-cols-2">
        <div className="h-full">
          {CommunityItems.filter((CommunityItem, index) => index < 5).map(
            (CommunityItem, index) => (
              <div
                className="h-1/5 border-0 border-b-2 border-solid border-gray-200"
                key={CommunityItem.id}
              >
                <Link
                  className="flex flex-row m-y-1 justify-center items-center h-full "
                  to="/community/"
                >
                  <div className="basis-1/12  text-center ">{index + 1}</div>
                  <div className="basis-2/12 text-center">{CommunityItem.img}</div>
                  <div className="basis-9/12">
                    <div>
                      <label className="inline-block">{CommunityItem.title}</label>
                      <div className="inline-block">[{CommunityItem.recommandCount}]</div>
                    </div>
                    <div>
                      <div className="inline-block">{CommunityItem.period}</div>
                      <div className="inline-block">{CommunityItem.name}</div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
        <div className="border-0 border-l-2 border-solid border-gray-200">
          {CommunityItems.filter((CommunityItem, index) => index > 4).map(
            (CommunityItem, index) => (
              <div
                className="h-1/5 border-0 border-b-2 border-solid border-gray-200"
                key={CommunityItem.id}
              >
                <Link
                  className="flex flex-row m-y-1 justify-center items-center h-full"
                  to="/community/"
                >
                  <div className="basis-1/12  text-center ">{index + 6}</div>
                  <div className="basis-2/12 text-center">{CommunityItem.img}</div>
                  <div className="basis-9/12">
                    <div>
                      <label className="inline-block">{CommunityItem.title}</label>
                      <div className="inline-block">[{CommunityItem.recommandCount}]</div>
                    </div>
                    <div>
                      <div className="inline-block">{CommunityItem.period}</div>
                      <div className="inline-block">{CommunityItem.name}</div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeListItem;
