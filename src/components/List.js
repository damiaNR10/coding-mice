import React, { useState } from 'react';
import Element from './Element';
import ElementCreator from './ElementCreator';
// import ElementUpdater from './ElementUpdater';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            error: false,
        };
        //this.updateElement = this.updateElement.bind(this);
    }

    componentDidMount() {
        this.fetchElements();
    }

    fetchElements = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                this.setState({elements: json});
                this.state.elements.forEach(element => {
                    element.isEditing = false;
                });
        });
    }

    createElement = (element) => {
        for(let i = 0; i < this.state.elements.length; i++) {
            if(this.state.elements[i].userId == element.userId) {
                if(element.title && element.body && element.userId) {
                    this.setState({
                        error: false,
                    }); 
                    fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify({
                            id: element.id,
                            title: element.title,
                            body: element.body,
                            userId: element.userId,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                        })
                        .then((response) => {
                            response.json();
                            this.setState(prevState => {
                                const elements = [...prevState.elements, element];
                                return {elements};
                            });
                        });
                } else {
                    this.setState({
                        error: true,
                    });
                }  
                break;
            }  
            else {
                this.setState({
                    error: true,
                });                
            }
        }
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
    }

    updateElement(element) {
        //console.log(element);
        // const elements = [...this.state.elements];
        // const index = elements.indexOf(element);
        // const newElement = {
        //     id: element.id,
        //     title: element.title,
        //     body: element.body,
        //     userId: element.userId,
        //     isEditing: false,
        // }

        // elements[index] = newElement;

        // this.setState({elements});




        //console.log(this.state.elements);


        // this.setState({
        //     elements: this.state.elements.map(element => (element.id === index ? newElement : element))
        // });

        // this.state.elements[element.id].isEditing = true;
        // this.setState({
            
        // });

        // fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //       id: element.id,
        //       title: element.title,
        //       body: element.body,
        //       userId: element.userId,
        //     }),
        //     headers: {
        //       'Content-type': 'application/json; charset=UTF-8',
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         //console.log(json);
        //         // console.log('update completed');
        //         //console.log(this.state.elements);
        //         const elements = [...this.state.elements];
        //         const index = elements.indexOf(element);
        //         elements[index] = element;
        //         if (index !== -1) {
        //             //elements.splice(index, 1);
        //             this.setState({elements: elements});
        //         }
        //         //console.log(this.state.elements);
        //     });
        //console.log(this.state.elements);
    }
    
    render(){
        
        return (
        <>
            <ElementCreator onCreate = {this.createElement}/>
            {this.state.error ? <p>You have to fill all inputs, Auhtor Id must be true!</p> : null}
            <div className="list">
                {this.state.elements.map((element) => {
                    return <Element 
                    key = {element.id} 
                    body = {element.body} 
                    title = {element.title} 
                    userId = {element.userId} 
                    isEditing = {element.isEditing}
                    onDelete = {() => this.deleteElement(element)}
                    onUpdate = {this.updateElement}
                    />
                })}
            </div>
        </>
        );
    }
}

export default List;