import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  Container,
  ScoreBoard,
  Score,
  Title,
  ButtonContainer,
  Button,
  Rules,
  OutcomeContainer,
  GameContainer,
  PlayerItem,
  AvatarWrapper,
  ResultMessage,
  ReplayButton,
  Modall,
} from './styled'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      isScoreCard: false,
      clickedImg: choicesList[0].imageUrl,
      randomImg: choicesList[1].imageUrl,
      resultText: '',
    }
  }

  handleButtonClick = choice => {
    console.log(`${choice} clicked`)
    const playerChoice = choicesList.find(item => item.id === choice)
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomIndex]
    let resultText = ''
    if (playerChoice.id === opponentChoice.id) {
      resultText = 'IT IS DRAW'
    } else if (
      (playerChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (playerChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER') ||
      (playerChoice.id === 'PAPER' && opponentChoice.id === 'ROCK')
    ) {
      resultText = 'YOU WON'
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      resultText = 'YOU LOSE'
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    this.setState({
      isScoreCard: true,
      clickedImg: playerChoice.imageUrl,
      randomImg: opponentChoice.imageUrl,
      resultText,
    })
  }

  handlePlayAgain = () => {
    this.setState({isScoreCard: false})
  }

  render() {
    const {score, isScoreCard, clickedImg, randomImg, resultText} = this.state

    return (
      <Container>
        <ScoreBoard>
          <Title>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </Title>
          <Score>
            Score
            <br /> {score}
          </Score>
        </ScoreBoard>

        {isScoreCard ? (
          <GameContainer>
            <OutcomeContainer>
              <PlayerItem>
                <h3>YOU</h3>
                <AvatarWrapper>
                  <img src={clickedImg} alt="your choice" />
                </AvatarWrapper>
              </PlayerItem>
              <PlayerItem>
                <h3>OPPONENT</h3>
                <AvatarWrapper>
                  <img src={randomImg} alt="opponent choice" />
                </AvatarWrapper>
              </PlayerItem>
            </OutcomeContainer>
            <ResultMessage>{resultText}</ResultMessage>
            <ReplayButton onClick={this.handlePlayAgain}>
              PLAY AGAIN
            </ReplayButton>
          </GameContainer>
        ) : (
          <ButtonContainer>
            <Button
              data-testid="rockButton"
              type="button"
              onClick={() => this.handleButtonClick('ROCK')}
            >
              <img src={choicesList[0].imageUrl} alt="ROCK" />
            </Button>
            <Button
              data-testid="scissorsButton"
              type="button"
              onClick={() => this.handleButtonClick('SCISSORS')}
            >
              <img src={choicesList[1].imageUrl} alt="SCISSORS" />
            </Button>
            <Button
              data-testid="paperButton"
              type="button"
              onClick={() => this.handleButtonClick('PAPER')}
            >
              <img src={choicesList[2].imageUrl} alt="PAPER" />
            </Button>
          </ButtonContainer>
        )}
        <Popup modal trigger={<Rules> RULES</Rules>} position="right center">
          {close => (
            <Modall>
              <button type="button" onClick={close}>
                <RiCloseLine />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </Modall>
          )}
        </Popup>
      </Container>
    )
  }
}

export default Result
