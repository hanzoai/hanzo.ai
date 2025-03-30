
import React from "react";

interface TaijiProps {
  size?: number;
  className?: string;
}

const TaijiSymbol: React.FC<TaijiProps> = ({ size = 48, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="49" fill="white" stroke="currentColor" strokeWidth="2" />
      <path 
        d="M50 1C23.9 1 2 22.9 2 49s21.9 48 48 48 48-21.9 48-48S76.1 1 50 1zm0 86c-10.4 0-18.8-8.4-18.8-18.8S39.6 49.4 50 49.4s18.8 8.4 18.8 18.8S60.4 87 50 87zm18.8-56.3c0 10.4-8.4 18.8-18.8 18.8S31.2 41.1 31.2 30.7 39.6 11.9 50 11.9s18.8 8.4 18.8 18.8z" 
        fill="currentColor" 
      />
      <circle cx="50" cy="30.7" r="6" fill="white" />
      <circle cx="50" cy="68.3" r="6" fill="currentColor" />
    </svg>
  );
};

export default TaijiSymbol;
