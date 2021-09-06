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
                this.setState({elements: json});
        });
    }

    createElement = (element) => {

    }

    deleteElement = (element) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(() => {
            const elements = [...this.state.elements];
            const index = elements.indexOf(element);
            if (index !== -1) {
                elements.splice(index, 1);
                this.setState({elements: elements});
            }
        });

        // const elements = [...this.state.elements];
        // const index = elements.indexOf(element);
        // console.log(index)
        // if (index !== -1) {
        //     elements.splice(index, 1);
        //     this.setState({elements: elements});
        // }
    }

    updateElement = (element) => {

    }
    
    render(){
        return (
            <div className="list">
                {this.state.elements.map((element) => {
                    return <Element 
                    key = {element.id} 
                    body = {element.body} 
                    title = {element.title} 
                    userId = {element.userId} 
                    onDelete = {() => this.deleteElement(element)}
                    />
                })}
            </div>
        );
    }
}

export default List;