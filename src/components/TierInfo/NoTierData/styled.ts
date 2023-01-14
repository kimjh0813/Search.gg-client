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
  /* margin: 0 32px; */
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
