import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 20px 0;
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }
  
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    
    li {
      font-size: 18px;
      padding: 10px;
      border: 1px solid;
      font-weight: 700;
      margin: 0 10px;
      
      a {
        color: #000;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: rgb(76, 175, 80);
        }
      }
    }
  }
`;
export const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #0077c2;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #0077c2;
  }
`;