import { aboutme, otherskills, skills } from "../data";
import SectionWrapper from "../hoc/SectionWrapper"
import { styles } from "../styles";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div>
        {<h2 className={`${styles.sectionText} text-center`}>
            About Me
        </h2>}
        <div className="flex gap-2 ">
          <div className="flex-1 items-center ">
            <h3 className={`${styles.h3Text} text-center`}>
              
            </h3>
            <div id="test">
              {aboutme.details.map((detail, index) =>(
                <p key={index} className="text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8">{detail}</p>
              ))}
            </div>
          </div>
          <div className="flex-1 ">
            <div className="mb-3">
              <h3 className={`${styles.h3Text} text-center`}>
                Languages
              </h3>
              <div className="justify-center"><Skills skills={skills} /></div>
            </div>
            <div>
              <h3 className={`${styles.h3Text} text-center`}>
                Other Skills
              </h3>
              <div className="justify-center"><Skills skills={otherskills} /></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SectionWrapper(AboutMe,"about");