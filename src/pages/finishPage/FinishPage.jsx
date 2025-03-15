import './finishPage.css';
import React, { useContext } from 'react';
import { Context } from '../../app_content/AppContent';
import BackButton from '../../buttons/BackButton';
import ConfirmButton from '../../buttons/ConfirmButton';
export default function FinishPage() {
    const [pageNumber, SetPageNumber, paymentType, setPaymentType,addOns,setAddOns, plans, setPlans] = useContext(Context);
    const totalPlanPrice = plans.filter(plan => plan.selected).reduce((total, plan) => total + plan.price, 0);
    const totalAddOnsPrice = addOns.filter(addOn => addOn.selected).reduce((total, addOn) => total + addOn.price, 0);
    const totalPrice = paymentType === 'monthly' ? totalPlanPrice + totalAddOnsPrice : (totalPlanPrice + totalAddOnsPrice) * 10;

    return (
        <div className='finishPage'>
        <h2 className="title">Finishing Up</h2>
        <div className="description">Double-check everything looks OK before confirming</div>
        <div className="receiptContainer">
            {plans.filter(plan => plan.selected).map(plan => (
                <div key={plan.id} className="plan">
                    <div className="planTitle">{plan.title}{paymentType === 'monthly' ? '(Monthly)':'(Yearly)'}</div>
                    <div className="planPrice">{paymentType === 'monthly' ? `$${plan.price}/mo` : `$${plan.price * 10}/yr`}</div>
                </div>
            ))}
           <hr />
            <div className="receiptAddOns">
               {addOns.filter(addOn => addOn.selected).map(addOn =>(
                    <div key={addOn.id} className="addOn">
                        <div className="addOnTitle">{addOn.title}</div>
                        <div className="addOnPrice">+${paymentType === 'monthly' ? `${addOn.price}/mo` : `${addOn.price*10}/yr`}</div>
                    </div>
                ))}
            </div>  
        </div>
        <div className="totalPrice">
            <span>Total:{paymentType === 'monthly' ? '(per month)' : '(per year)'}</span>
            <span className='price'>${totalPrice}{paymentType === 'monthly' ? '/mo' : '/yr'}</span>
        </div>
            
        <div className="buttonContainer">
            <BackButton value={() => SetPageNumber(pageNumber - 1)} />
            <ConfirmButton value={() => SetPageNumber(pageNumber + 1)} />
        </div>
        </div>
    );
    }
