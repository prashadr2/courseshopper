import React from 'react'

export default class ReviewCard extends React.Component {
    constructor(props){
        super(props);
        //props are: review, name, rating
    }

    render(){
        return(
        <div>
            <p>{this.props.name}: "{this.props.review}" --> Rating: {this.props.rating} </p>
        </div>
        );
    }
}