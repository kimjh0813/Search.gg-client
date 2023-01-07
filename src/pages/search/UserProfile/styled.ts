import styled from 'styled-components';

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

export { ProfileImage };
