import React from 'react'
import logo from '../../images/BookLogo.png'
import './ReviewCard.css'

// review section in course page
// holds the information from the database passed through props
export default class ReviewCard extends React.Component {
    render() {
        return (
            <div class="ui comments" style={{ width: "100%", alignItems: "center", justifyContent: "center", }}>
                <div class="comment" style={{ fontSize: "18px", padding: "20px" }}>
                    <a class="avatar"
                        href="/#"
                        style={{ marginLeft: "20px", marginRight: "50px" }}>
                        <img src={logo} alt="user profile" />
                    </a>
                    <div class="content" style={{ width: "800px", textAlign: 'left' }}>
                        <div class="author">{this.props.name}</div>
                        <div class="metadata">
                            <div>

                                <i aria-hidden="true" class="star icon">
                                </i>Overall: {this.props.rating} stars
                            </div>
                        </div>
                        <div class="text">{this.props.review}</div>
                    </div>
                </div>
            </div>

        );
    }
}