import React from 'react';
import Element from './Element';

class List extends React.Component {

    

    render(){
        return (
            <div className="list">
                <Element body = "lorem ipsum" title = "Title" userId = "5" />
            </div>
        );
    }
}

export default List;