import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 10px;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #1b2a4d;
  font-family: 'Bree Serif';
`

export const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 20px;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  margin-bottom: 12%;
  margin-top: 25px;

  @media (min-width: 768px) {
    margin-bottom: 10%;
  }
`

export const Score = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  background-color: white;
  color: #1b2a4d;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: 'Roboto';
`

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  line-height: 1.5;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  gap: 40px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 150px;
    height: 150px;
  }
`

export const Rules = styled.button`
  outline: none;
  border: none;
  background-color: white;
  color: #223a5f;
  padding: 10px 10px;
  font-weight: bold;
  border-radius: 6px;
  text-align: end;
  margin-top: auto;
  margin-bottom: 20px;
  margin-left: auto;
  cursor: pointer;
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  width: 420px;
  font-family: 'Roboto';
`

export const OutcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`

export const PlayerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AvatarWrapper = styled.div`
  padding: 20px;
  margin-bottom: 10px;

  img {
    width: 150px;
    height: 150px;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`

export const ReplayButton = styled.button`
  background-color: white;
  color: #1b2a4d;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ccc;
  }
`

export const ResultMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`

export const Modall = styled.div`
  width: 600px;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;

  img {
    width: 100%;
  }

  button {
    margin-left: auto;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
