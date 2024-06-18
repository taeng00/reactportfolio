import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";  // personalDetails와 eduDetails를 가져옵니다.

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;

//{React.Children.toArray(...)}: eduDetails 배열을 순회하면서 각각의 항목을 Work 컴포넌트로 전달하여 교육 경력을 표시합니다. 
//각 항목은 Position, Company, Location, Type, Duration 등의 정보를 포함합니다.