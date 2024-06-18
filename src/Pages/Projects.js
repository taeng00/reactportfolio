import React from "react";
import Project from "../Components/Project"; //프로젝트 컴포넌트(Project)를 가져옵니다. 이 컴포넌트는 각 프로젝트 항목을 표시합니다.
import { projectDetails } from "../Details"; 
//배열을 가져옵니다. 이 배열은 각 프로젝트의 제목, 이미지, 설명, 기술 스택, 미리보기 링크, GitHub 링크와 같은 정보를 포함합니다.


function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20"> {/*Tailwind CSS 클래스를 사용하여 레이아웃을 설정합니다 */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"> {/*Tailwind CSS 클래스를 사용하여 스타일링 */}
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10"> {/*다양한 화면 크기에서 다른 열의 수를 지정하고 각 열 사이의 간격을 설정 */}
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;

/*이 코드는 projectDetails 배열에 있는 각 프로젝트 정보를 가져와 화면에 그리드 형식으로 표시하는 역할을 합니다. 
각 프로젝트 카드는 Project 컴포넌트에서 구현된 UI를 사용하여 제목, 이미지, 설명, 기술 스택 및 링크를 표시합니다.*/






