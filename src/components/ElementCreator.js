import React from 'react';

class ElementCreator extends React.Component {

    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.authorIdInput = React.createRef();
        this.bodyInput = React.createRef();
    }

    render(){

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="form__label">
                    Title
                    <input className="form__input" type="text" />
                </label>
                <label className="form__label">
                    Author ID
                    <input className="form__input" type="number" min="0" />
                </label>
                <label className="form__label">
                    Body
                    <textarea className="form__input form__input--textarea" />
                </label>
                <button className="form__button">Add Element</button>
            </form>
        );
    }
}

export default ElementCreator;