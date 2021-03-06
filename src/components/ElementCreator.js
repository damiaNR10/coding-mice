import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class ElementCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            userId: null,
            body: null,
        }
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleUserIdChange = (event) => {
        this.setState({userId: event.target.value});
    }

    handleBodyChange = (event) => {
        this.setState({body: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate({
            id: uuidv4(),
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body,
        });
    }

    render(){

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="form__label">
                    Title
                    <input onChange={this.handleTitleChange} className="form__input" type="text" />
                </label>
                <label className="form__label">
                    Author ID
                    <input onChange={this.handleUserIdChange} className="form__input" type="number" min="0" />
                </label>
                <label className="form__label">
                    Body
                    <textarea onChange={this.handleBodyChange} className="form__input form__input--textarea" />
                </label>
                <button className="form__button">Add Element</button>
            </form>
        );
    }
}

export default ElementCreator;