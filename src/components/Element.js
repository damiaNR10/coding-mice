import React from 'react';

class Element extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newTitle: null,
            newBody: null,
            contentEditable: false,
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange = (event) => {
        // this.setState({newTitle: event.target.value});
        // console.log(event.target.value);
        console.log(event.currentTarget);
    }

    handleBodyChange = (event) => {
        this.setState({newBody: event.target.value});
    }

    editElement = () => {
        this.setState({
            contentEditable: true,
        });
    }
    
    updateElement = (element) => {
        //event.preventDefault();
        //console.log(element);
        this.props.onUpdate({
            id: element.id,
            title: this.state.newTitle,
            userId: element.userId,
            body: this.state.newBody,
        });
    }

    render(){

        const {body, title, userId, onDelete, onUpdate} = this.props;
        //const contentEditable = false;

        return (
            <article className="element">
                <header className="element__header">
                    <h2 onChange = {this.handleTitleChange} className="element__title" suppressContentEditableWarning={true} contentEditable={this.state.contentEditable ? "true" : "false"}>{title}</h2>
                    <span className="element__author">Author ID: {userId}</span>
                </header>
                <div className="element__content" onChange = {this.handleBodyChange} suppressContentEditableWarning={true} contentEditable={this.state.contentEditable ? "true" : "false"}>{body}</div>
                <div className="element__menu">
                    {this.state.contentEditable ? <button onClick = {this.updateElement} className="element__button element__button--margin-right">Save</button> : <button onClick = {this.editElement} className="element__button element__button--margin-right">Update</button>}
                    {/* <button onClick = {onUpdate} className="element__button element__button--margin-right">Update</button> */}
                    <button onClick = {onDelete} className="element__button">Delete</button>
                </div>
            </article>
        );
    }
}

export default Element;