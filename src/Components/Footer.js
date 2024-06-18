import React from "react";

// 4. 사용자가 직접 선언한 객체(object) 또는 클래스(class)를 이용하는 프로그래밍을 사용하였나?  : 푸터에 표시할 정보를 객체로 선언
const footerData = {
  designer: {
    name: "taehyun Kim",
    url: "https://team-introduce.vercel.app/",
  },
  course: "2024 Web programming"
};
// Footer 컴포넌트는 페이지 하단에 표시될 푸터를 렌더링합니다.
const Footer = () => {        // 1. 자신이 직접 만든 함수(익명함수, 화살표함수 등 포함)를 사용하였나? 
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
       {/* 푸터 내용을 담은 p 태그입니다. */}
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}  {/* 디자이너 정보를 포함한 링크 */}
        <a
          className="font-medium"
          href={footerData.designer.url} // designer 객체의 URL을 링크의 href 속성에 설정합니다.
          target="_blank"
          rel="noreferrer noopener"
        >
          {footerData.designer.name}
        </a>{" "}
        with
        <span className="text-gradient font-medium"> {footerData.course}</span>
      </p>
    </footer>
  );
};

export default Footer;
