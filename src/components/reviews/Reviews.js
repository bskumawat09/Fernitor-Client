import { Rating } from "@mui/material"
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

const Reviews = ({ pid }) => {
    const [rating, setRating] = useState(2);
    const [description, setDescription] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await publicRequest.get(`/reviews/products/${pid}`);
                console.log("ReviewsRes", response.data);
                setReviews(response.data.reviews);
            } catch (err) {
                console.log("ERROR", err);
            }
        }
        getReviews();
    }, [pid]);

    const handleClick = async () => {
        const response = await publicRequest.post(`/reviews/products/${pid}`, { review: { rating, description } });
        console.log(response.data);
    }

    return (
        <section className="review">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 px-3">
                        <div className="title">
                            <h4>Add a Review</h4>
                        </div>
                        <div className="review-box w-80">
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                            <div className="review-form my-2">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="3"
                                            placeholder="Write your review"
                                            onChange={e => setDescription(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 my-3">
                                    <button onClick={handleClick} className="btn submit-btn text-capitalize">
                                        submit now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 px-3">
                        <div className="title">
                            <h4>Reviews</h4>
                        </div>
                        {
                            reviews.map((review) => (
                                <div id="#list" className="review-item">
                                    <div className="media">
                                        <div className="d-flex justify-content-start align-items-center">
                                            {/* <div className="media-body"> */}
                                            <div>{review.author.name}</div>
                                            <Rating name="read-only" value={review.rating} readOnly />
                                            {/* </div> */}
                                        </div>
                                        <p className="mt-2">
                                            {review.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
