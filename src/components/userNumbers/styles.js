import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Repositorios = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e5e5e5;
  border-radius: 10px;
  border: 1px solid #d7d7d7;

  &:hover {
    filter: brightness(0.8);
  }

  h1 {
    font-size: 20px;
    text-align: center;
    color: #444;
    margin: 0;
  }

  h2 {
    font-size: 12px;
    text-align: center;
    color: #777;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.03);
    transition: 0.4s ease;
    border-radius: 10px;
  }
`
