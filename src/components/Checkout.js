import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function Checkout() {
  const { credit, purchaseCredits } = useContext(providerFunctions);
  const onToken = (token, addresses) => {
    console.log(token);
    console.log(addresses);
    purchaseCredits(
      credit.value,
      token.id,
      token.card.exp_month,
      token.card.exp_year,
      token.card.last4,
      122
    );
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.

    //     card:
    // address_city: null
    // address_country: null
    // address_line1: null
    // address_line1_check: null
    // address_line2: null
    // address_state: null
    // address_zip: null
    // address_zip_check: null
    // brand: "MasterCard"
    // country: "US"
    // cvc_check: "unchecked"
    // dynamic_last4: null
    // exp_month: 12
    // exp_year: 2021
    // funding: "credit"
    // id: "card_1Ir2qJI1IGg378hl0yc03jST"
    // last4: "4444"
    // name: "debolacodes@gmail.com"
    // object: "card"
    // client_ip: "102.67.14.28"
    // created: 1621005743
    // email: "debolacodes@gmail.com"
    // id: "tok_1Ir2qJI1IGg378hl4d8CcnO8"
  };
  return (
    <div>
      <StripeCheckout
        amount={credit.value * 100}
        // description="Awesome Product"
        locale="en-GB"
        name="Reachio"
        stripeKey="pk_test_51I78LwI1IGg378hlHDoOdRJgHbw6izVv1uIiSwNeMx4VcwR0QEM8eodskwAfx9TFikxoFLDQhbJYNvZHiFPU1OiQ00s3WcCXG9"
        token={onToken}
        label={"Make Payment £" + credit.value}
        success_url="./pages/Dashboard"
      ></StripeCheckout>
    </div>
  );
}
