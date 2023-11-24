import css from "../FeedbackOptions/FeedbackOptions.module.css"
const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <ul className={css.feedback_button}>
            {options.map((option, index) => (
                <li key={index} >
                    <button
                        type="button"
                        className="button_{option}"
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FeedbackOptions;