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
            courseNumber: this.props.courseNumber
        }
    }

    componentDidMount(){
        this.getReviews();
    }

    getReviews(){
        axios.get("https://course-shopper.herokuapp.com/review", 
        {params: {prefix: this.props.coursePrefix, number: this.props.courseNumber}})
        .then(response=>{
            console.log(response);
            this.setState({
                reviews: [...response]
            });
        })
        .catch(error=>{console.log(error);});
    }

    sendReviews(){

    }

    render(){
        let allcards;
        if(this.state.reviews.length === 0){
            allcards = <Loader type="TailSpin" color="#52f3cf" height={100} width={100} timeout={15000} />
        } else {
            allcards = this.state.reviews.map(review=>{return <ReviewCard name={null} review={null} rating={null}/>});
        }
        return(
        <div>
            {}
            <div className="reviewform">
                
            </div>
            <div className="reviews">
                {allcards}
            </div>

        </div>
        );
    }
}