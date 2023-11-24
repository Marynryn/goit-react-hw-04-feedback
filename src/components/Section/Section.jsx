import css from "../Section/Section.module.css"
const Section = ({ title, children }) => {
    return (
        <section>
            <h3 className={css.feedback_title}>{title}</h3>
            {children}
        </section>
    )
}
export default Section;