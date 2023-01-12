import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const TierInfoWrapper = styled.div`
  display: inline;
  width: 100%;
  /* margin-right: 32px; */
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
  > img {
    width: auto;
    height: 110px;
    margin: 5px 12px;
  }
`;

const TierTextBox = styled.div`
  margin: 20px 0 0 9px;
  .tier_info {
    width: 110px;
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

const WInLossBox = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
`;

export { Container, TierInfoWrapper, TierInfoBox, TierTextBox, WInLossBox, TierTitle };
