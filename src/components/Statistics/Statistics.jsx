import css from "../Statistics/Statistics.module.css"

const Statistics = (props) => {
    return (<div>
        <h3>{props.title}</h3>
        <ul className={css.statistics}>
            <li>Good: {props.good}</li>
            <li>Neutral: {props.neutral}</li>
            <li>Bad: {props.bad}</li>
            <li>Total: {props.total}</li>
            <li>Positive feedback: {props.positivePercentage}%</li>
        </ul>
    </div>);
};

export default Statistics;