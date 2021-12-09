import {connect} from 'react-redux';

import {iRootState, Dispatch} from 'store';

import Counter from './Counter';

const mapState = (state: iRootState) => ({
    count: state.count
});
const mapDispatch = (dispatch: Dispatch) => ({
    increment: () => dispatch.count.increment(1)
});

export default connect(mapState, mapDispatch)(Counter);
