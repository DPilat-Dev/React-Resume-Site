import * as AiIcons from "react-icons/ai";
import * as BsIcons  from "react-icons/bs";
import * as BiIcons  from "react-icons/bi";
import * as CiIcons  from "react-icons/ci";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FiIcons from "react-icons/fi";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as ImIcons  from "react-icons/im";
import * as LiaIcons  from "react-icons/lia";
import * as IoIcons  from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons  from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RxIcons  from "react-icons/rx";
import * as RiIcons  from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons  from "react-icons/tb";
import * as TfiIcons  from "react-icons/tfi";
import * as TiIcons  from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";
import { IconType } from "react-icons/lib";

interface DynamicIconProps  {
    iconName: string;
    size?: number; 
    color?: string; 
  };

const DynamicIcon = ({iconName, size = 24, color = "white"}:DynamicIconProps) => {
   // Combine all namespaces into a single object
   const allIcons = {...AiIcons, ...BsIcons, ...BiIcons, ...CiIcons, ...CgIcons, ...DiIcons,
                     ...FiIcons, ...FcIcons, ...FaIcons, ...Fa6Icons, ...GiIcons, ...GoIcons, 
                     ...GrIcons, ...HiIcons, ...Hi2Icons, ...ImIcons, ... LiaIcons, ...IoIcons,
                     ...Io5Icons, ...LuIcons, ...MdIcons, ...PiIcons, ...RxIcons, ...RiIcons, 
                     ...SiIcons, ...SlIcons, ...TbIcons, ...TfiIcons, ...TiIcons, ...VscIcons,
                     ...WiIcons};
   const IconComponent = allIcons[iconName as keyof typeof allIcons] as IconType;
 
   if (!IconComponent) {
     console.error(`Icon "${iconName}" not found. Ensure it is correctly spelled and includes the namespace.`);
     return <span>Icon "{iconName}" not found</span>;
   }
 
   return <IconComponent size={size} color={color} />;
}

export default DynamicIcon;