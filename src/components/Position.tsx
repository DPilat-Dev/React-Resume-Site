interface PositionProps {
  textSize?: string; // Pass text size as a Tailwind class
}

const produceSpans = (text:any, animation:any) => {
    return text.split("").map((letter:any, index:any) => (
      <span
        key={index}
        className={`inline-block transform-style-3d origin-bottom ${animation}`}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };
  
  const Position = ({ textSize = "text-[36px]" }:PositionProps) => {
    return (
      <div className={`relative text-white ${textSize} flex `}>
        <div className="flex flex-col">
          <div className="text first absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Fullstack Software Engineer">
            {produceSpans("Fullstack Software Engineer", "animate-textRotate1")}
          </div>
          <div className="text second absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Home Lab Enthusiast">
            {produceSpans("Home Lab Enthusiast", "animate-textRotate2")}
          </div>
        </div>
      </div>
    );
  };
  
  export default Position;