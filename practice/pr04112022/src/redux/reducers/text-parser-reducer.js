import { TEXT_PARSER } from "../types";

export const textParserReducer = (state = [], action) => {
    switch (action.type) {
        case TEXT_PARSER:
            return action.payload
    }
    return state;
}