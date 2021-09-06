import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class ElementUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            body: null,
            id: null,
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleSelectChange = (event) => {
        this.setState({id: event.target.value});
        //console.log(event.target.value);
        console.log(this.state);
    }

    handleBodyChange = (event) => {
        this.setState({body: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.onUpdate({
        //     id: null,
        //     title: this.state.title,
        //     userId: this.state.userId,
        //     body: this.state.body,
        // });
        // this.state.title = null;
        // this.state.authorId = null;
        // this.state.body = null;
    }

    render(){

        return (<>
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="form__label">
                    Element to update
                    <select onChange={this.handleSelectChange} className="form__select form__input">
                        {this.props.elements.map((element, id) => {
                            return <option value={element.id} key={element.id} elementid={element.id}>ID: {element.id}, Title: {element.title}</option>
                        })}
                    </select>
                </label>
                <label className="form__label">
                    Title
                    <input onChange={this.handleTitleChange} className="form__input" type="text" />
                    {this.props.elements.map((element, index) => {
                        //this.state.id === element.id ? console.log("same") : console.log("different");
                    })}
                </label>
                {/* <label className="form__label">
                    Author ID
                    <input onChange={this.handleUserIdChange} className="form__input" type="number" min="0" />
                </label> */}
                <label className="form__label">
                    Body
                    <textarea onChange={this.handleBodyChange} className="form__input form__input--textarea" />
                </label>
                <button className="form__button">Update Element</button>
            </form>
            </>
        );
    }
}

export default ElementUpdater;