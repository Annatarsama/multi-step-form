import BackButton from "../../buttons/BackButton";
import { useState, useContext } from "react";
import ForwardButton from "../../buttons/ForwardButton";
import { Context } from '../../app_content/AppContent';
import './planPage.css';

export default function PlanPage() {
    const [pageNumber, SetPageNumber, paymentType, setPaymentType,addOns,setAddOns, plans, setPlans] = useContext(Context);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const selectPlan = (id) => {
        setSelectedPlan(id);
        setPlans(plans.map(plan => plan.id === id ? { ...plan, selected: true } : { ...plan, selected: false }));
    };

    const handleToggle = () => {
        setPaymentType(paymentType === 'monthly' ? 'yearly' : 'monthly');
    };

    const handleSubmit = (e) => {
        if (!selectedPlan) {
            alert('Please select a plan');
            return;
        }
        SetPageNumber(pageNumber + 1);
    };

    const handleBack = () => {
        SetPageNumber(pageNumber - 1);
    };

    return (
        <div className="planPage">
            <h2 className="title">Select Your Plan</h2>
            <div className="description">You have the option of monthly or yearly billing</div>
            <div className="planContainer">
                {plans.map(plan => (
                    <div
                        key={plan.id}
                        onClick={() => selectPlan(plan.id)}
                        className={`plan ${selectedPlan === plan.id ? 'selectedPlan' : ''}`}
                    >
                        <img src={plan.icon} alt={plan.title} />
                        <div className="planTitle">{plan.title}</div>
                        <div className="planPrice">{paymentType === 'monthly' ? `$${plan.price}/mo` : `$${plan.price * 10}/yr`}</div>
                        {paymentType === 'yearly' && <div className="planDescription">2 months free</div>}
                    </div>
                ))}
            </div>
            <div className="toggleContainer">
                <span className={`planName ${paymentType === 'monthly' ? 'activeSpan' : ''}`}>Monthly</span>
                <label className="switch">
                    <input type="checkbox" checked={paymentType === 'yearly'} onChange={handleToggle} />
                    <span className="slider round"></span>
                </label>
                <span className={`planName ${paymentType === 'yearly' ? 'activeSpan' : ''}`}>Yearly</span>
            </div>
            <div className="buttonSection">
                <BackButton value={handleBack} />
                <ForwardButton value={handleSubmit} />
            </div>
        </div>
    );
}