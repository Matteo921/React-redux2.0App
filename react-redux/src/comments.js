import React from 'react';

const Comment = ({text, votes}) => <li>{text} <span>votes: {votes}</span></li>;

export default Comment;
function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
                }
        , ...state];
        ...
        default:
            return state;
    }
}