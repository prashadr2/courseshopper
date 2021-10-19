import React from 'react'
import ReviewCard from './ReviewCard'
import axios from 'axios';
import Loader from "react-loader-spinner";

export default class Reviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [], //async pull from db
            courseTitle: this.props.courseTitle,
            coursePrefix: this.props.coursePrefix,
            courseNumber: this.props.courseNumber,
            review: 'Leave a review here',
            rating: 5
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendReviews = this.sendReviews.bind(this);
    }

    componentDidMount(){
        this.getReviews();
    }

    getReviews(){
        axios.get("https://course-shopper.herokuapp.com/review/" + this.state.coursePrefix + "/" + this.state.courseNumber)
        .then(response=>{
            this.setState({
                reviews: [...response.data.reviews] //has fields named [text,reviewer,rating]
            });
        })
        .catch(error=>{console.log(error);});
    }

    sendReviews(event){
        let request = {
            'text': this.state.review,
            'rating': this.state.rating,
            'prefix': this.state.coursePrefix,
            'number': this.state.courseNumber
        }
        axios.post("https://course-shopper.herokuapp.com/review", request).then(
            (response)=>{console.log(response);}, (error)=>{console.log(error);});
            
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({review: event.target.value});
    }
    

    render(){
        let allcards;
        if(this.state.reviews.length === 0){
            allcards = <Loader type="TailSpin" color="#52f3cf" height={100} width={100} timeout={15000} />
        } else {
            allcards = this.state.reviews.map(review=>{return <ReviewCard name={review.reviewer} review={review.text} rating={review.rating}/>});
        }
        return(
        <div>
            <div className="reviewform">
                <form onSubmit={this.sendReviews}>
                    <label>Leave a review: </label><br />
                    <textarea value={this.state.review} onChange={this.handleChange} /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <p>Previous user reviews: </p>
            <div className="reviews">
                {allcards}
            </div>

        </div>
        );
    }
}