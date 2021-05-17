import React from "react";

import {
  Elements,
  ElementsConsumer,
  CardElement,
} from "@stripe/react-stripe-js";

class StripePaymentForm extends React.Component {
    render() {
      return (
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {(ctx: any) => <PaymentForm {...ctx} />}
          </ElementsConsumer>
        </Elements>
      );
    }
  }
