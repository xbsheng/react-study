import { createStore, applyMiddleware } from 'redux'
// yarn add redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

import reducers from './reducers'

// export default createStore(reducers, applyMiddleware(thunk))
// 添加redux开发者工具支持
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
