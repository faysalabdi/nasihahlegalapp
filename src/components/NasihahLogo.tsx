import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

// Import assets
import logoFull from '@/assets/logo.png';
import logoFooter from '@/assets/footer.png';

interface NasihahLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "footer";
  animated?: boolean;
  className?: string;
  href?: string;
}

const NasihahLogo = ({ 
  size = "md", 
  variant = "full",
  animated = true,
  className,
  href
}: NasihahLogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10 md:h-12",
    lg: "h-14 md:h-16",
    xl: "h-20 md:h-24"
  };

  const getLogoSrc = () => {
    switch(variant) {
      case "footer":
        return logoFooter;
      case "full":
      default:
        return logoFull;
    }
  };

  const Logo = (
    <motion.div 
      className={cn(
        sizes[size],
        "relative",
        className
      )}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={getLogoSrc().src} 
        alt="Nasihah Legal" 
        className="h-full w-auto object-contain"
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href}>
        {Logo}
      </Link>
    );
  }

  return Logo;
};

export default NasihahLogo; 