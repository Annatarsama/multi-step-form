import './buttonStyles.css';
function ConfirmButton({value}) {
  return <button className="confirm-btn" onClick={value}>Confirm</button>;
}

export default ConfirmButton;