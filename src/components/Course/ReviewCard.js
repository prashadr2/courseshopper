import React from 'react'
import './ReviewCard.css'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


export default class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
        //props are: review, name, rating
    }

    render() {
        return (
            <div class="ui comments" style={{width: "100%", alignItems: "center", justifyContent: "center",}}>
                <div class="comment" style={{fontSize:"18px", padding:"20px"}}>
                    <a class="avatar" style={{marginLeft: "20px", marginRight: "50px"}}>
                        <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
                    </a>
                    <div class="content" style={{width:"800px", textAlign:'left'}}>
                        <div class="author">{this.props.name}</div>
                        <div class="metadata">
                            <div>2 days ago</div>
                            <div>
                                <i aria-hidden="true" class="star icon">
                                </i>{this.props.rating} stars
                            </div>
                        </div>
                        <div class="text">{this.props.review}</div>
                    </div>
                </div>
            </div>

        );
    }
}