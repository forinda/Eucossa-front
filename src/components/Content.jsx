import React from 'react'

function Content(props) {

    return (
        <div className="Content__body">
            <p className="question_body">
                {props.body}
            </p>
        </div>
    )
}

export default Content
