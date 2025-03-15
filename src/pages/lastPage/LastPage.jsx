import icon from '../../assets/images/icon-thank-you.svg';
import './lastPage.css';
export default function LastPage() {
    return (
        <div className='lastPage'>
            <img src={icon} alt="" />
            <h2 className="title">Thank You!</h2>
            <div className="description">
                Thanks for confirming your subscription! We hope you have fun using
                our platform. If you ever need support, please feel free to email us 
                at support@loremgaming.com.
            </div>
        </div>
    );
}