import { connect } from 'react-redux';
import { addCard,addBlog } from '../Actions/index';

import Routes from '../Routes/Routes';
import App from '../App'

const mapStateToProps = state => ({ cards: state });

const mapDispatchToProps = dispatch => ({
  insertCard: (cards) => { dispatch(addCard(cards)) },
 

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
