import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const Box = styled.div`
  display: flex;
`;

const ProfileBox = styled.div`
  position: relative;
  > img {
    /* display: flex; */
    border-radius: 15px;
    width: 120px;
  }

  > span {
    position: absolute;
    width: 40px;
    text-align: center;
    padding: 1px 0;
    border: solid 1px #444;
    border-radius: 10px;
    background-color: #444;
    color: white;
    top: 110px;
    left: 40px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameBox = styled.div`
  margin-left: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #444;
`;

export { ProfileBox, Container, NameBox, Box, InfoBox };
