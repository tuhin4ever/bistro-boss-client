import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
// TODO: provide stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total).toFixed(2);

  return (
    <div className="w-full h-screen">
      <SectionTitle
        heading="Payment"
        subHeading="please process"
      ></SectionTitle>
      <Helmet>
        <title>Dashboard | Payment Process</title>
      </Helmet>
      <h2 className="text-3xl text-center">taka taka tumi uira uira asho </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
