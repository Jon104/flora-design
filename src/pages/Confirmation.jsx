import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";

const Confirmation = (props) => {
  const renderOrderSummary = () => {
    const { order, onBackToHome } = props;

    if (!order) return null;

    return (
      <div className="confirmation">
        <div className="confirmation__wrapper">
          <div className="confirmation__wrapper-message">
            <h4>
              Thank you for your purchase, {order.customer.firstname}{" "}
              {order.customer.lastname}!
            </h4>
            <p className="confirmation__wrapper-reference">
              <span>Order ref:</span> {order.customer_reference}
            </p>
          </div>
          <Link
            className="confirmation__wrapper-back"
            type="button"
            to="/"
            onClick={onBackToHome}
          >
            <FontAwesomeIcon size="1x" icon="arrow-left" color="#292B83" />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    );
  };

  return <>{renderOrderSummary()}</>;
};

export default Confirmation;
