import SectionWrapper from "../hoc/SectionWrapper"
import { styles } from "../styles";

const Portfolio = () => {
  return (
    <div>
      <h2 className={`${styles.sectionText} text-center`}>
        Portfolio
      </h2>
    </div>
  )
}

export default SectionWrapper(Portfolio,"portfolio");