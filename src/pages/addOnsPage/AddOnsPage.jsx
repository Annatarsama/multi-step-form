import React, { useContext } from 'react';
import { Context } from '../../app_content/AppContent';
import BackButton from '../../buttons/BackButton';
import ForwardButton from '../../buttons/ForwardButton';
import './addOnsPage.css';

export default function AddOnsPage() {
    const [pageNumber, SetPageNumber, paymentType, setPaymentType, addOns, setAddOns] = useContext(Context);

    const handleToggle = (id) => {
        setAddOns(addOns.map(addOn => addOn.id === id ? { ...addOn, selected: !addOn.selected } : addOn));
    };

    return (
        <div className='addOnsPage'>
            <h2 className="title">Pick add-ons</h2>
            <div className="description">Add-ons help enhance your gaming experience</div>
            <div className="optionContainer">
                {addOns.map(addOn => (
                    <div key={addOn.id} className={`option ${addOn.selected ? 'selected' : ''}`}>
                        <input
                            type="checkbox"
                            checked={addOn.selected}
                            onChange={() => handleToggle(addOn.id)}
                        />
                        <div className="textContainer">
                            <div className="optionTitle">{addOn.title}</div>
                            <div className="optionDescription">{addOn.description}</div>
                        </div>
                        <div className="optionPrice">+${paymentType === 'monthly' ? `${addOn.price}/mo` : `${addOn.price*10}/yr`}</div>
                    </div>
                ))}
            </div>
            <div className="buttonContainer">
                <BackButton value={() => SetPageNumber(pageNumber - 1)} />
                <ForwardButton value={() => SetPageNumber(pageNumber + 1)} />
            </div>
        </div>
    );
}