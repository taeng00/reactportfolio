import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  // 필요한 기술 스택 이미지들을 가져옵니다.
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    vscode,
    github,
    figma,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      {/* 기술 스택 섹션 */}
      <section>
        {/* "Tech Stack" 제목과 간단한 설명 */}
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          제가 다룰 수 있는 기술 스택입니다.
        </p>
      </section>
      
      {/* 기술 스택 이미지 그리드 */}
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
      </section>
      
      {/* 도구 섹션 */}
      <section>
        {/* "Tools" 제목 */}
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      
      {/* 도구 이미지 그리드 */}
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
      </section>
    </main>
  );
}

export default Technologies;

/*
5. 자바스크립트로 DOM 요소를 생성, 삭제, 변경하는 createElement, remove 등의 기능을 활용하였나?
이 코드는 React 컴포넌트 함수인 Technologies를 사용하여 UI를 정의합니다. 
기술 스택 섹션과 도구 섹션을 구성하며, 각 섹션에서는 이미지들을 그리드 형태로 배열합니다. 
기술 스택 섹션에는 HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap 이미지가 포함되어 있고, 
도구 섹션에는 Visual Studio Code, GitHub, Figma 이미지가 포함됩니다. 
이 코드는 React의 Virtual DOM을 활용하여 상태나 프로퍼티 변경 시 실제 DOM을 업데이트하는 방식으로 작동합니다.
*/