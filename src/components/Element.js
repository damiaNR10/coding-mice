import React from 'react';

class Element extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contentEditable: false,
        }
    }

    editElement = () => {
        this.setState({
            contentEditable: true,
        });
    }

    render(){

        const {body, title, userId, onDelete, onUpdate} = this.props;
        //const contentEditable = false;

        return (
            <article className="element">
                <header className="element__header">
                    <h2 className="element__title" suppressContentEditableWarning={true} contentEditable={this.state.contentEditable ? "true" : "false"}>{title}</h2>
                    <span className="element__author">Author ID: {userId}</span>
                </header>
                <div className="element__content" suppressContentEditableWarning={true} contentEditable={this.state.contentEditable ? "true" : "false"}>{body}</div>
                <div className="element__menu">
                    {this.state.contentEditable ? <button onClick = {onUpdate} className="element__button element__button--margin-right">Save</button> : <button onClick = {this.editElement} className="element__button element__button--margin-right">Update</button>}
                    {/* <button onClick = {onUpdate} className="element__button element__button--margin-right">Update</button> */}
                    <button onClick = {onDelete} className="element__button">Delete</button>
                </div>
            </article>
        );
    }
}

export default Element;