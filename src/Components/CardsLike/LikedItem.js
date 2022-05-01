import { Link } from "react-router-dom";

const LikedItem = ({ like }) => {
  return (
    <>
      <div className="col-md-3">
        <div class="card" style={{ width: "18rem" }}>
          <img src={like.product.imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
          <Link
              to={`details_db/${like.product._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 class="card-title">{like.product.name}</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LikedItem;
