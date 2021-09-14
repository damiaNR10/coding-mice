import React, { useState } from 'react';

class Element extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     newTitle: null,
        //     newBody: null,
        //     editable: false,
        // }

        // this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.handleBodyChange = this.handleBodyChange.bind(this);
        //this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleTitleChange = (event) => {
        this.setState({newTitle: event.target.value});
        //console.log(this.state.newTitle);
    }

    handleBodyChange = (event) => {
        this.setState({newBody: event.target.value});
        //console.log(this.state.newBody);
    }

    editElement = () => {
        // this.setState({
        //     editable: true,
        // });
    }
    
    handleUpdate = () => {
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
        this.props.onUpdate({
            userId: 1,
            id: 2,
            title: 'title',
            body: 'body',
            isEditing: false,
        });

        //this.props.onUpdate();

        //console.log(this.props.onUpdate('msg'));

        // this.setState({
        //     newTitle: null,
        //     newBody: null,
        //     editable: false,        
        // });
    }
    

    render(){

        const {body, isEditing, title, userId, onDelete, onUpdate} = this.props;
        //const contentEditable = false;

        return (
            <article className="element">
                <header className="element__header">
                    {/* <h2 onChange = {this.handleTitleChange} className="element__title">{title}</h2> */}
                    {isEditing ? 
                        <input type="text" onChange = {this.handleTitleChange} className="element__input" value={title} />
                        : 
                        <h2 className="element__title">{title}</h2>
                    }
                    <span className="element__author">Author ID: {userId}</span>
                </header>
                {isEditing ? 
                    <input type="text" className="element__input" onChange = {this.handleBodyChange} value={body} />
                    :
                    <div className="element__content">{body}</div>
                }
                {/* <div className="element__content" onChange = {this.handleBodyChange}>{body}</div> */}
                <div className="element__menu">
                    {isEditing ? 
                        <button onClick = {e => this.handleUpdate(e)} className="element__button element__button--margin-right">Save</button> 
                        : 
                        // <button onClick = {this.editElement} className="element__button element__button--margin-right">Update</button>
                        <button onClick = {e => this.handleUpdate(e)} className="element__button element__button--margin-right">Update</button>
                    }
                    {/* <button onClick = {this.editElement} className="element__button element__button--margin-right">Update</button> */}
                    <button onClick = {onDelete} className="element__button">Delete</button>
                </div>
            </article>
        );
    }
}

export default Element;