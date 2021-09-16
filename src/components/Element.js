import React from 'react';

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
        this.props.onUpdate(elementToUpdateId);
    }
    

    render(){

        const {body, isEditing, title, userId, onDelete, index} = this.props;

        return (
            <article className="element">
                <header className="element__header">
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
                <div className="element__menu">
                    {isEditing ? 
                        <button onClick = {() => this.handleEdit(index)} className="element__button element__button--margin-right">Save</button> 
                        : 
                        <button onClick = {() => this.handleUpdate(index)} className="element__button element__button--margin-right">Update</button>
                    }
                    <button onClick = {onDelete} className="element__button">Delete</button>
                </div>
            </article>
        );
    }
}

export default Element;