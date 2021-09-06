import React from 'react';

class Element extends React.Component {
    render(){

        const {body, title, userId, onDelete} = this.props;

        return (
            <article className="element">
                <header className="element__header">
                    <h2 className="element__title">{title}</h2>
                    <span className="element__author">Author ID: {userId}</span>
                </header>
                <div className="element__content">{body}</div>
                <div className="element__menu">
                    <button className="element__button element__button--margin-right">Update</button>
                    <button onClick = {onDelete} className="element__button">Delete</button>
                </div>
            </article>
        );
    }
}

export default Element;