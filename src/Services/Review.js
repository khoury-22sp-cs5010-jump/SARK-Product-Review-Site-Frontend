import axios from "axios";

const API_URL = process.env.REACT_APP_API_SARK || "http://localhost:4300/api";

const CREATE_REVIEW_URL = `${API_URL}/add-review`;

export const CreateReview=async(reviews)=>{
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.post(
        CREATE_REVIEW_URL,
        {
            id: loginInfo._id,
            pid:reviews.pid,
            review:reviews.review,
            rating:reviews.rating,
        },
        {
            headers: {
                authorization: localStorage.getItem("LoginToken"),
            },
        }
    );
    return data.data;
}
