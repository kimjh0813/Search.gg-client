import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-right: 10px;
`;

const TierInfoWrapper = styled.div`
  width: 100%;
  margin: 0 32px;
  p {
    font-weight: 500;
  }
`;

const TierInfoBox = styled.div`
  display: flex;
  img {
    width: 105px;
    height: auto;
    margin-right: 16px;
  }
`;

const TierTextBox = styled.div`
  margin: 20px 0 0 15px;
  p {
    width: 115px;
  }
`;

const WInLossBox = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export { Container, TierInfoWrapper, TierInfoBox, TierTextBox, WInLossBox };
