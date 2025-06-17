import React, { useState } from 'react'
import { useAppText } from '../contexts/AppTextContextProvider'
import { PaymentAmountInterface, PaymentMethodInterface } from '../interfaces/appTextInterfaces'

type PaymentStep = 'amount' | 'method'

const PaymentSelector: React.FC = () => {
    const { appText } = useAppText()
    const paymentText = appText.payment

      // State management
  const [currentStep, setCurrentStep] = useState<PaymentStep>('amount')
  const [selectedAmount, setSelectedAmount] = useState<PaymentAmountInterface | null>(null)
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [customAmountValue, setCustomAmountValue] = useState('')

    // Handlers
    const handleAmountSelect = (amount: PaymentAmountInterface) => {
        setSelectedAmount(amount)
        setCurrentStep('method')
    }

    const handleMethodSelect = (method: PaymentMethodInterface) => {
        if (!selectedAmount) return

        const paymentUrl = generatePaymentUrl(selectedAmount, method)
        window.open(paymentUrl, '_blank', 'noopener,noreferrer')
    }

      const handleBack = () => {
    setCurrentStep('amount')
    setSelectedAmount(null)
    setShowCustomInput(false)
    setCustomAmountValue('')
  }

    const generatePaymentUrl = (amount: PaymentAmountInterface, method: PaymentMethodInterface): string => {
        const { value } = amount
        const { name, baseUrl } = method

        // Handle custom amount case - open base URL for manual entry
        if (value === 'custom') {
            switch (name) {
                case 'stripe':
                    return 'https://buy.stripe.com/' // User can browse available products
                case 'revolut':
                    return 'https://revolut.me/quentinatd' // User can enter custom amount
                case 'paypal':
                    return 'https://paypal.me/yourhandle' // User can enter custom amount
                default:
                    return baseUrl
            }
        }

        // Extract numeric value from amount (e.g., "5€" -> "5")
        const numericAmount = value.replace(/[€$]/g, '')

        switch (name) {
            case 'stripe':
                // For Stripe Payment Links - replace with your actual payment link IDs
                const stripeLinks: { [key: string]: string } = {
                    '5': 'https://buy.stripe.com/test_your_5_euro_link',
                    '10': 'https://buy.stripe.com/test_your_10_euro_link',
                    '25': 'https://buy.stripe.com/test_your_25_euro_link',
                    '50': 'https://buy.stripe.com/test_your_50_euro_link'
                }
                return stripeLinks[numericAmount] || baseUrl

            case 'revolut':
                // Revolut.me supports direct amount parameter
                return `https://revolut.me/quentinatd/${numericAmount}`

            case 'paypal':
                // PayPal.me supports direct amount with currency
                return `https://paypal.me/yourhandle/${numericAmount}EUR`

            default:
                return baseUrl
        }
    }

      const handleCustomAmountClick = () => {
    setShowCustomInput(true)
  }

  const handleCustomAmountSubmit = () => {
    const numericValue = parseFloat(customAmountValue)
    
    // Validation: check if it's a valid number and within reasonable range
    if (isNaN(numericValue) || numericValue < 1 || numericValue > 500) {
      return // Invalid input, don't proceed
    }
    
    const customAmount: PaymentAmountInterface = {
      value: `${numericValue}€`,
      description: `Custom amount: ${numericValue}€`
    }
    setSelectedAmount(customAmount)
    setCurrentStep('method')
    setShowCustomInput(false)
    setCustomAmountValue('')
  }

  const handleCustomAmountCancel = () => {
    setShowCustomInput(false)
    setCustomAmountValue('')
  }

    // Render amount selection step
    const renderAmountSelection = () => (
        <>
            <h3>{paymentText.title}</h3>
            <p>{paymentText.steps.selectAmount}</p>

                  <div className="paymentSelector-options">
        {paymentText.amounts.map((amount, index) => (
          <button
            key={index}
            onClick={() => amount.value === 'custom' ? handleCustomAmountClick() : handleAmountSelect(amount)}
            className="paymentSelector-optionButton"
          >
            <span className="paymentSelector-description">{amount.description}</span>
            <span className="paymentSelector-amount">{amount.value}</span>
          </button>
        ))}
      </div>

      {showCustomInput && (
        <div className="paymentSelector-customInput">
          <input
            type="number"
            value={customAmountValue}
            onChange={(e) => setCustomAmountValue(e.target.value)}
            placeholder="Enter amount (1-500€)"
            min="1"
            max="500"
            step="0.01"
            autoFocus
          />
          <div className="paymentSelector-customButtons">
            <button onClick={handleCustomAmountCancel} className="paymentSelector-cancelButton">
              Cancel
            </button>
            <button 
              onClick={handleCustomAmountSubmit} 
              className="paymentSelector-confirmButton"
              disabled={!customAmountValue || parseFloat(customAmountValue) < 1 || parseFloat(customAmountValue) > 500}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
        </>
    )

    // Render payment method selection step
    const renderMethodSelection = () => (
        <>
            <div className="paymentSelector-header">
                <button onClick={handleBack} className="paymentSelector-backButton">
                    ← {paymentText.steps.backButton}
                </button>
                <div className="paymentSelector-selectedAmount">
                    {selectedAmount?.value}
                </div>
            </div>

            <h3>{paymentText.steps.selectMethod}</h3>

            <div className="paymentSelector-methods">
                {paymentText.methods.map((method, index) => (
                    <button
                        key={index}
                        onClick={() => handleMethodSelect(method)}
                        className="paymentSelector-methodButton"
                    >
                        <img
                            src={`./assets/icons/${method.icon}`}
                            alt={method.displayName}
                            className="paymentSelector-methodIcon"
                        />
                        <span className="paymentSelector-methodName">{method.displayName}</span>
                    </button>
                ))}
            </div>
        </>
    )

    // Render progress indicator
    const renderProgressIndicator = () => (
        <div className="paymentSelector-progress">
            <div className={`paymentSelector-step ${currentStep === 'amount' ? 'active' : 'completed'}`}>
                <div className="paymentSelector-stepNumber">1</div>
                <span className="paymentSelector-stepLabel">Amount</span>
            </div>
            <div className="paymentSelector-stepConnector"></div>
            <div className={`paymentSelector-step ${currentStep === 'method' ? 'active' : ''}`}>
                <div className="paymentSelector-stepNumber">2</div>
                <span className="paymentSelector-stepLabel">Method</span>
            </div>
        </div>
    )
    
    return (
        <div className="paymentSelector">
            {renderProgressIndicator()}

            {currentStep === 'amount' ? renderAmountSelection() : renderMethodSelection()}

            <div className="paymentSelector-info">
                <p>{paymentText.info.security}</p>
                <p>{paymentText.info.encryption}</p>
            </div>
        </div>
    )
}

export default PaymentSelector 