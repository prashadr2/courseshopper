import React from 'react'
import ReviewCard from './ReviewCard'
import axios from 'axios';
import Loader from "react-loader-spinner";
import "./Reviews.css"
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import StarRatings from 'react-star-ratings'


export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [], //async pull from db
            courseTitle: this.props.courseTitle,
            coursePrefix: this.props.coursePrefix,
            courseNumber: this.props.courseNumber,
            review: 'Leave a review here',
            qrating: 0,
            wrating: 0,
            prating: 0,
            drating: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendReviews = this.sendReviews.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    componentDidMount() {
        this.getReviews();
    }

    getReviews() {
        axios.get("https://course-shopper.herokuapp.com/review/" + this.state.coursePrefix + "/" + this.state.courseNumber)
            .then(response => {
                this.setState({
                    reviews: [...response.data.reviews] //has fields named [text,reviewer,rating]
                });
            })
            .catch(error => { console.log(error); });
    }

    sendReviews(event) {
        alert("The review was submitted");
        let request = {
            'text': this.state.review,
            'prefix': this.state.coursePrefix,
            'number': this.state.courseNumber,
            'qrating': this.state.qrating,
            'wrating': this.state.wrating,
            'drating': this.state.drating,
            'prating': this.state.prating,
        }
        axios.post("https://course-shopper.herokuapp.com/review", request).then(
            (response) => { console.log(response); }, (error) => { console.log(error); });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ review: event.target.value });
    }

    handleRating(rating, name) {
        if (name === "qrate") {
            this.setState({
                qrating: rating
            })
        } else if (name === "wrate") {
            this.setState({
                wrating: rating
            })
        } else if (name === "drate") {
            this.setState({
                drating: rating
            })
        } else if (name === "prate") {
            this.setState({
                prating: rating
            })
        } else {
            console.log("this should never happen");
        }
    }

    render() {
        let allcards;
        if (this.state.reviews.length === 0) {
            allcards = <Loader type="TailSpin" color="#52f3cf" height={100} width={100} timeout={15000} />
        } else {
            allcards = this.state.reviews.map(review => {
                return <ReviewCard
                    name={review.reviewer}
                    review={review.text}
                    rating={review.rating}
                />
            });
        }
        return (
            <div>
                <div className="reviews">
                    <div>
                        <div className="reviewTitle">Previous user reviews:</div>
                        {allcards}
                    </div>
                </div>
                <div >
                    <form className="reviewForm" onSubmit={this.sendReviews}>
                        <label style={{ fontSize: "36px" }}> Leave a review: </label><br />
                        <div className='rating'>Teaching Quality <StarRatings rating={this.state.qrating} starRatedColor="blue" changeRating={this.handleRating} name="qrate" /></div>
                        <div className='rating'>Workload   <StarRatings rating={this.state.wrating} starRatedColor="blue" changeRating={this.handleRating} name="wrate" /></div>
                        <div className='rating'>Difficulty <StarRatings rating={this.state.drating} starRatedColor="blue" changeRating={this.handleRating} name="drate" /></div>
                        <div className='rating'>Practicability <StarRatings rating={this.state.prating} starRatedColor="blue" changeRating={this.handleRating} name="prate" /></div>
                        <textarea className="textBox" placeholder={this.state.review} onChange={this.handleChange} /> <br />
                        <input className="submitButton" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}