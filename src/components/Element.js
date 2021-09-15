import React, { useState } from 'react';

class Element extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newTitle: null,
            newBody: null,
        }
    }

    componentDidMount() {
        this.setState({
            newTitle: this.props.title,
            newBody: this.props.body,
        });
    }

    handleTitleChange = (event) => {
        this.setState({newTitle: event.target.value});
    }

    handleBodyChange = (event) => {
        this.setState({newBody: event.target.value});
    }

    handleEdit = (elementToEdit) => {
        const newElement = {
            newTitle: this.state.newTitle,
            newBody: this.state.newBody,
        }

        this.props.onEdit(elementToEdit, newElement);
    }
    
    handleUpdate = (elementToUpdateId) => {
        //event.persist();
        // const data = {
        //     name: 'elo',
        //     surname: 'elo1'
        // }
        //this.props.onUpdate();
        //event.preventDefault();
        //console.log(element);
        //console.log(this.state.newTitle);
        // const element = {
        //     userId: 1,
        //     id: 2,
        //     title: "this.state.newTitle",
        //     body: "this.state.newBody",
        //     isEditing: false,
        // }
        // this.props.onUpdate({
        //     userId: 1,
        //     id: elementToUpdateId,
        //     title: this.state.newTitle,
        //     body: this.state.newBody,
        //     isEditing: true,
        // });

        this.props.onUpdate(elementToUpdateId);

        //this.props.onUpdate();

        //console.log(this.props.onUpdate('msg'));

        // this.setState({
        //     newTitle: null,
        //     newBody: null,
        //     editable: false,        
        // });
    }
    

    render(){

        const {body, isEditing, title, userId, onDelete, onUpdate, index} = this.props;
        //const contentEditable = false;

        return (
            <article className="element">
                <header className="element__header">
                    {/* <h2 onChange = {this.handleTitleChange} className="element__title">{title}</h2> */}
                    {isEditing ? 
                        <input type="text" onChange = {this.handleTitleChange} className="element__input" defaultValue={title} />
                        : 
                        <h2 className="element__title">{title}</h2>
                    }
                    <span className="element__author">Author ID: {userId}</span>
                </header>
                {isEditing ? 
                    <input type="text" className="element__input" onChange = {this.handleBodyChange} defaultValue={body} />
                    :
                    <div className="element__content">{body}</div>
                }
                {/* <div className="element__content" onChange = {this.handleBodyChange}>{body}</div> */}
                <div className="element__menu">
                    {isEditing ? 
                        <button onClick = {() => this.handleEdit(index)} className="element__button element__button--margin-right">Save</button> 
                        : 
                        // <button onClick = {this.editElement} className="element__button element__button--margin-right">Update</button>
                        <button onClick = {() => this.handleUpdate(index)} className="element__button element__button--margin-right">Update</button>
                    }
                    {/* <button onClick = {this.editElement} className="element__button element__button--margin-right">Update</button> */}
                    <button onClick = {onDelete} className="element__button">Delete</button>
                </div>
            </article>
        );
    }
}

export default Element;