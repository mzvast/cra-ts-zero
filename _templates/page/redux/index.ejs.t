---
to: src/pages/<%= h.changeCase.paramCase(title)%>/index.tsx
---
import {connect} from 'react-redux';
import {iRootState, Dispatch} from 'store';

import <%= title%> from './<%= title%>';

const mapState = (state: iRootState) => ({
});
const mapDispatch = (dispatch: Dispatch) => ({
});

export default connect(mapState, mapDispatch)(<%= title%>);
