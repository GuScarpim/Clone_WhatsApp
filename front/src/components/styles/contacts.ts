import styled from 'styled-components';

export const Perfil = styled.div`
  height: 40px;
  width: 40px;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50px;
  background-color: #acacac4d;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50px;
  }
`

export const Contacts = styled.button`
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  background: #FFF;
  height: 62px;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 59px;
  }

  &:hover {
    background: #DADADA;
  }

  section {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 4px;
    width: 70%;
    
    span {
      display: flex;
      justify-content: flex-start;
      font-size: 17px;
    }

    small {
      position: relative;
      width: 100%;
      flex-grow: 1;
      overflow: hidden;
      white-space: nowrap;
      color: #6B6866;
      text-overflow: ellipsis;
      display: flex;
      font-size: 14px;
      align-items: center;
      padding-bottom: 5px;
      border-bottom: 1px solid #6b686629;

      svg {
        padding-right: 3px;
      }
    }
  }
`
