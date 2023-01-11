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
    width: 105px;
    height: auto;
    margin: 0 7px;
  }
`;

const TierTextBox = styled.div`
  margin: 20px 0 0 9px;
  > p {
    width: 110px;
    font-weight: 600;
  }
`;

const WInLossBox = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`;

export { Container, TierInfoWrapper, TierInfoBox, TierTextBox, WInLossBox, TierTitle };
