import React from 'react';

const renderMessageClassName = (props) => {
    let className = "alert ";
    props.message.msgError ? className = className + "alert-danger" : className = className + "alert-success";
    className = className + " text-center";
    return className;
}

const Message = (props) => {
    return (
        <div className={renderMessageClassName(props)} role="alert">
            <p>{props.message.msgBody}</p>
        </div>
    )
}

export default Message;

