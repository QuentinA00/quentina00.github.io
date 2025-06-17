import React from 'react'
import { useAppText } from '../contexts/AppTextContextProvider'

const StripePayment: React.FC = () => {
    const { appText } = useAppText()
    const stripePaymentText = appText.stripePayment

    const handlePayment = (paymentLink: string) => {
        window.open(paymentLink, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="stripePayment">
            <h3>{stripePaymentText.title}</h3>
            <p>{stripePaymentText.description}</p>

            <div className="stripePayment-options">
                {stripePaymentText.paymentOptions.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handlePayment(option.paymentLink)}
                        className="stripePayment-optionButton"
                    >
                        <span className="stripePayment-description">{option.description}</span>
                        <span className="stripePayment-amount">{option.amount}</span>
                    </button>
                ))}
            </div>

            <div className="stripePayment-info">
                <p>{stripePaymentText.info.security}</p>
                <p>{stripePaymentText.info.encryption}</p>
            </div>
        </div>
    )
}

export default StripePayment 