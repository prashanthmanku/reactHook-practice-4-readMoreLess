import styled from 'styled-components'

export const AppCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`

export const WidthCard = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 23px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
`

export const Description = styled.p`
  color: #334155;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  text-align: center;
  &.left {
    text-align: left;
    line-height: 23px;
  }
`

export const Img = styled.img`
  width: 100%;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    align-self: flex-start;
  }
`
