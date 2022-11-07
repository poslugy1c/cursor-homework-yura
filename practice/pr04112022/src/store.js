import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addTextReducer } from "./redux/reducers/add-text-reducer";
import { textParserReducer } from "./redux/reducers/text-parser-reducer";


const reducer = combineReducers({
    addTextReducer,
    textParserReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;