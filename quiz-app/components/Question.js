import React from 'react';

function Question(props) {
    return (
        <h2 className="question">{props.content}</h2>
    );
}

Question.propTypes = {
    content: React.PropTypes.strings.isRequired
};

export default Question; 