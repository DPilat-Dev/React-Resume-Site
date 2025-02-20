
import { SkillType } from "../data"
import DynamicIcon from "./DynamicIcon"

interface props {
  skills : SkillType[]
};

const Skills = ({skills}:props) => {
  return (
    <div className="">
      {skills.map((skill, index) => (
        <span key={skill.name || index} className="inline-flex bg-gray-800 font-bold rounded-full px-3 py-1 mx-1 my-1">
          <DynamicIcon iconName={skill.icon} />
          <span className="ml-1">{skill.name}</span>
        </span>
      ))}
    </div>
  )
}

export default Skills