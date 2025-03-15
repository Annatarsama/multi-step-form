import './buttonStyles.css';
function ForwardButton({value}) {
    
  return (
    <button onClick={value} className="forward-btn">
        Next Step
    </button>
  );
}   
export default ForwardButton;