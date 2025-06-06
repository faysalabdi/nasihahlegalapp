import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LegalPillarProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light" | "pattern";
  size?: "sm" | "md" | "lg" | "xl";
  rotate?: boolean;
}

const LegalPillar = ({ 
  className, 
  variant = "dark", 
  size = "md",
  rotate = false,
  ...props 
}: LegalPillarProps) => {
  
  const getImagePath = () => {
    switch(variant) {
      case "light":
        return "/images/legalpiece2.png";
      case "pattern":
        return "/images/legalpieces.png";
      case "dark":
      default:
        return "/images/legalpiece1.png";
    }
  };

  const getSizeClass = () => {
    switch(size) {
      case "sm":
        return "w-8 h-16";
      case "lg":
        return "w-16 h-32";
      case "xl":
        return "w-24 h-48";
      case "md":
      default:
        return "w-12 h-24";
    }
  };

  return (
    <div 
      className={cn(
        getSizeClass(),
        "relative",
        rotate && "transform rotate-45",
        className
      )}
      {...props}
    >
      <img 
        src={getImagePath()} 
        alt="Legal pillar motif" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default LegalPillar; 