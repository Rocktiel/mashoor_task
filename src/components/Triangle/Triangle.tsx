"use client"
export const Triangle = ({className}:{className?:string}) => {
  return (
    <div className={"absolute top-[-1vh]  left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-t-10 border-l-transparent border-r-transparent border-t-white rotate-180"}></div>
  );
};