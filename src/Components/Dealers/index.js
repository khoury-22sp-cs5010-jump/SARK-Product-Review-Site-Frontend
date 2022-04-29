import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProductsAction } from "../Actions/AddProduct";
import { loginAction } from "../Actions/Login";
import "./login.css";
const Dealers = () => {
  const [data, updateData] = useState({
    name: "",
    imageUrl: "",
    price: 0,
    manufacturer: "",
    asin: "",
    country: "",
    originalPrice: 0,
    discount: 0,
    discountPercentage: 0,
    currency: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, updateErrors] = useState({});
  const [valid, setValid] = useState(false);
  const [products, setProducts] = useState({});

  const putData = (event) => {
    const { name, value } = event.target;
    updateData({ ...data, [name]: value });
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    updateErrors(validation(data));
    setValid(true);
  };

  useEffect(() => {
    getProductsAction().then((data) => setProducts(data));
    if (Object.keys(errors).length === 0 && valid) {
      loginAction(dispatch, data).then((data) => {
        if (data.success) {
          navigate("/");
        }
      });
    }
  }, [errors, data, navigate, dispatch, valid]);
  const validation = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "Product Name is required";
    }
    if (!value.imageUrl) {
      errors.imageUrl = "Image Url is Required";
    }
    if (!value.price) {
      errors.price = "Price is Required";
    }
    return errors;
  };
  return (
    <div className="mx-auto my-5 p-5 wd-login-container">
      <div className="wd-form-login-text">
        <h3>Add Product</h3>
      </div>
      <form>
        <div className="form-floating my-3">
          <input
            type="text"
            className={`form-control${errors.name ? " is-invalid" : ""}`}
            id="Name"
            name="name"
            value={data.name}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Name">Product Name</label>
          <p className="text-danger">{errors.name ? errors.name : ""}</p>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className={`form-control${errors.imageUrl ? " is-invalid" : ""}`}
            id="ImageUrl"
            name="imageUrl"
            value={data.imageUrl}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="ImageUrl">Image URL</label>
          <p className="text-danger">
            {errors.imageUrl ? errors.imageUrl : ""}
          </p>
        </div>
        <div className="form-floating my-3">
          <input
            type="number"
            className={`form-control${errors.price ? " is-invalid" : ""}`}
            id="Price"
            name="price"
            value={data.price}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Price">Price </label>
          <p className="text-danger">{errors.price ? errors.price : ""}</p>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            className={`form-control${
              errors.manufacturer ? " is-invalid" : ""
            }`}
            id="Manufacturer"
            name="manufacturer"
            value={data.manufacturer}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Manufacturer">Manufacturer </label>
          <p className="text-danger">
            {errors.manufacturer ? errors.manufacturer : ""}
          </p>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            className={`form-control${errors.asin ? " is-invalid" : ""}`}
            id="Asin"
            name="asin"
            value={data.asin}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Asin">ASIN </label>
          <p className="text-danger">{errors.asin ? errors.asin : ""}</p>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            className={`form-control${errors.country ? " is-invalid" : ""}`}
            id="Country"
            name="country"
            value={data.country}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Country">Country </label>
          <p className="text-danger">{errors.country ? errors.country : ""}</p>
        </div>

        <div className="form-floating my-3">
          <input
            type="number"
            className={`form-control${
              errors.originalPrice ? " is-invalid" : ""
            }`}
            id="OriginalPrice"
            name="originalPrice"
            value={data.originalPrice}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="OriginalPrice">Original Price </label>
          <p className="text-danger">
            {errors.originalPrice ? errors.originalPrice : ""}
          </p>
        </div>

        <div className="form-floating my-3">
          <input
            type="number"
            className={`form-control${errors.discount ? " is-invalid" : ""}`}
            id="Discount"
            name="discount"
            value={data.discount}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Discount">Discount </label>
          <p className="text-danger">
            {errors.discount ? errors.discount : ""}
          </p>
        </div>

        <div className="form-floating my-3">
          <input
            type="number"
            className={`form-control${
              errors.discountPercentage ? " is-invalid" : ""
            }`}
            id="DiscountPercentage"
            name="discountPercentage"
            value={data.discountPercentage}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="DiscountPercentage">Discount Percentage </label>
          <p className="text-danger">
            {errors.discountPercentage ? errors.discountPercentage : ""}
          </p>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            className={`form-control${errors.currency ? " is-invalid" : ""}`}
            id="Currency"
            name="currency"
            value={data.currency}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Currency">Currency </label>
          <p className="text-danger">
            {errors.currency ? errors.currency : ""}
          </p>
        </div>
        <div>
          <button
            className="btn btn-primary rounded-pill w-100 p-2"
            onClick={(event) => dataSubmit(event)}
          >
            Add Product
          </button>
        </div>
      </form>
      {JSON.stringify(products)}
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
export default Dealers;