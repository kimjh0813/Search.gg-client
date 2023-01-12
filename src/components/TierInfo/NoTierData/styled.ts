import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const TierInfoWrapper = styled.div`
  display: inline;
  width: 100%;
  margin: 0 32px;
  > p {
    font-weight: 500;
  }
`;

const TierTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const TierInfoBox = styled.div`
  display: flex;
  line-height: 19px;
  img {
    width: auto;
    height: 120px;
  }
`;

const DescriptionBox = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`;

export { Container, TierInfoWrapper, TierInfoBox, DescriptionBox, TierTitle };
