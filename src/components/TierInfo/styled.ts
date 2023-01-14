import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #f9f9f9;
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  min-width: 235px;
  overflow: hidden;
`;

const TierInfoWrapper = styled.div`
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
  justify-content: center;
  align-items: center;
  > img {
    max-width: 95px;
    width: 100%;
    margin: 5px 12px;
  }
`;

const TierTextBox = styled.div`
  margin: 20px 0 0 9px;

  .tier_info {
    word-break: break-all;
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
