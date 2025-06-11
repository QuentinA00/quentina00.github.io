import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'

// Replace with your actual publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key_here')

const CheckoutForm: React.FC = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setPaymentError(null)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setPaymentError('Card element not found')
      setIsProcessing(false)
      return
    }

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: 'Customer Name', // You can make this dynamic
      },
    })

    if (error) {
      setPaymentError(error.message || 'An error occurred')
      setIsProcessing(false)
    } else {
      // In a real app, you'd send paymentMethod.id to your backend
      console.log('Payment Method Created:', paymentMethod)
      setPaymentSuccess(true)
      setIsProcessing(false)
    }
  }

  if (paymentSuccess) {
    return (
      <div className="stripePayment-success">
        <h3>Payment Successful!</h3>
        <p>Thank you for your payment.</p>
        <button onClick={() => setPaymentSuccess(false)}>
          Make Another Payment
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="stripePayment-form">
      <h3>Payment Details</h3>
      
      <div className="stripePayment-cardElement">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>

      {paymentError && (
        <div className="stripePayment-error">
          {paymentError}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="stripePayment-submitButton"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  )
}

const StripePayment: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="stripePayment">
        <CheckoutForm />
      </div>
    </Elements>
  )
}

export default StripePayment 