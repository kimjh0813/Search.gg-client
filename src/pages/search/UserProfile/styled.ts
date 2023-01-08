import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #ddd;
  border-radius: 10px;
`;

const ProfileImage = styled.div`
  position: relative;
  margin-top: 24px;
  margin-left: 32px;
  img {
    display: flex;
    border-radius: 15px;
    width: 100px;
    height: 100px;
  }

  label {
    position: absolute;
    width: 40px;
    text-align: center;
    padding: 1px 0;
    border: solid 1px #444;
    border-radius: 10px;
    background-color: #444;
    color: white;
    top: 90px;
    left: 30px;
  }
`;

const NameBox = styled.div`
  margin: 24px 0 0 30px;
  font-size: 16px;
  font-weight: 500;
  color: #444;
`;

export { ProfileImage, Container, NameBox };
