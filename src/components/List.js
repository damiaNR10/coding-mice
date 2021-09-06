import React from 'react';
import Element from './Element';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: []
        };
    }

    componentDidMount() {
        this.fetchElements();
    }

    fetchElements = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                this.setState({'elements': json});
            });
    }
    
    render(){
        return (
            <div className="list">
                {this.state.elements.map((element) => {
                    return <Element key={element.id} body = {element.body} title = {element.title} userId = {element.userId} />
                })}
            </div>
        );
    }
}

export default List;