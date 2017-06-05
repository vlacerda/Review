import { connect } from 'react-redux';
import FlashCardList from '../components/FlashCardList'
import { AddCardAction } from '../redux/FlashCard';

const mapStateToProps = (state) => {
  return {
    flashCards: state.flashCards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputSubmit: (newFlashCard) => { dispatch(AddCardAction(newFlashCard)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardList)