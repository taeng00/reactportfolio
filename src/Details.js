// 로고 이미지들을 모듈로 가져와서 내보냄
import logogradient from "./assets/taelogo.png"; // 'logogradient' 이미지를 가져옵니다.
import logo from "./assets/taelogo.png"; // 'logo' 이미지를 가져옵니다.
// Profile Image
import profile from "./assets/me.png"; // 'profile' 이미지를 가져옵니다.
// Tech stack images
import html from "./assets/techstack/html.png"; // 'html' 기술 스택 이미지를 가져옵니다.
import css from "./assets/techstack/css.png"; // 'css' 기술 스택 이미지를 가져옵니다.
import js from "./assets/techstack/js.png"; // 'js' 기술 스택 이미지를 가져옵니다.
import react from "./assets/techstack/react.png"; // 'react' 기술 스택 이미지를 가져옵니다.
import tailwind from "./assets/techstack/tailwind.png"; // 'tailwind' 기술 스택 이미지를 가져옵니다.
import bootstrap from "./assets/techstack/bootstrap.png"; // 'bootstrap' 기술 스택 이미지를 가져옵니다.
import vscode from "./assets/techstack/vscode.png"; // 'vscode' 기술 스택 이미지를 가져옵니다.
import github from "./assets/techstack/github.png"; // 'github' 기술 스택 이미지를 가져옵니다.
import figma from "./assets/techstack/figma.png"; // 'figma' 기술 스택 이미지를 가져옵니다.
// Project Images
import projectImage1 from "./assets/projects/project1.png"; // 'projectImage1' 프로젝트 이미지를 가져옵니다.
import projectImage2 from "./assets/projects/project2.png"; // 'projectImage2' 프로젝트 이미지를 가져옵니다.
import projectImage3 from "./assets/projects/project3.png"; // 'projectImage3' 프로젝트 이미지를 가져옵니다.
import projectImage4 from "./assets/projects/project4.png"; // 'projectImage4' 프로젝트 이미지를 가져옵니다.
import projectImage5 from "./assets/projects/project5.png"; // 'projectImage5' 프로젝트 이미지를 가져옵니다.
import projectImage6 from "./assets/projects/project6.png"; // 'projectImage6' 프로젝트 이미지를 가져옵니다.

// 로고 이미지들을 객체로 내보냅니다.
export const logos = {
  logogradient: logogradient, // 'logogradient' 이미지를 'logos' 객체에 할당합니다.
  logo: logo, // 'logo' 이미지를 'logos' 객체에 할당합니다.
};

// 개인 정보 세부사항
export const personalDetails = {
  name: "taehyun Kim", // 이름
  tagline: "Welcome, webprogramming", // 태그라인
  img: profile, // 프로필 이미지
  about: `중부대학교 정보보호학과에 4학년으로 재학중인 25살 19학번 김태현 이라고 합니다!`, // 자기 소개
};

// 소셜 미디어 URL
export const socialMediaUrl = {
  github: "https://github.com/taeng00", // GitHub 프로필 링크
  instagram: "https://www.instagram.com/kimtxehyxn", // Instagram 프로필 링크
};

// 교육 세부사항
export const eduDetails = [
  {
    Position: "Information Security", // 전공
    Company: "Joongbu University", // 학교
    Location: "Goyang", // 위치
    Type: "Full Time", // 유형
    Duration: "Mar 2019 - Present", // 기간
  },
  {
    Position: "Frontend Development", // 직무
    Company: `Likelion 11th`, // 프로그램 이름
    Location: "Goyang", // 위치
    Type: "1 year", // 유형
    Duration: "Mar 2023 - Dec 2023", // 기간
  },
];

// 기술 스택 및 도구
export const techStackDetails = {
  html: html, // HTML 이미지
  css: css, // CSS 이미지
  js: js, // JavaScript 이미지
  react: react, // React 이미지
  tailwind: tailwind, // Tailwind 이미지
  bootstrap: bootstrap, // Bootstrap 이미지
  vscode: vscode, // VSCode 이미지
  github: github, // GitHub 이미지
  figma: figma, // Figma 이미지
};

// 프로젝트 세부사항
export const projectDetails = [
  {
    title: "1학기 팀 프로젝트", // 프로젝트 제목
    image: projectImage1, // 프로젝트 이미지
    description: '1학기 기말 팀프로젝트 입니다. 1학기 중간고사 때 완성 시켰던 팀소개 페이지가 내장 되어 있습니다.', // 프로젝트 설명
    techstack: "React, Next JS", // 사용된 기술 스택
    previewLink: "https://24webteam.vercel.app/", // 미리보기 링크
    githubLink: "https://github.com/taeng00/24webteam", // GitHub 링크
  },
  {
    title: "1학기 중간 개인 포트폴리오", // 프로젝트 제목
    image: projectImage2, // 프로젝트 이미지
    description: `1학기 중간 개인 포트폴리오 입니다. 저에 대한 간략한 소개와 1학기에 진행했던 프로젝트들, SECON 참관 보고서가 내장 되어 있습니다.`, // 프로젝트 설명
    techstack: "HTML/CSS, JavaScript", // 사용된 기술 스택
    previewLink: "https://my-portfolio-puce-seven-75.vercel.app/", // 미리보기 링크
    githubLink: "https://github.com/taeng00/MyPortfolio", // GitHub 링크
  },
  {
    title: "Javascript 예제", // 프로젝트 제목
    image: projectImage3, // 프로젝트 이미지
    description: `1학기 중간 이후부터 진행했던 Javascript를 통한 예제들을 담은 프로젝트 입니다. `, // 프로젝트 설명
    techstack: "JavaScript, HTML/CSS", // 사용된 기술 스택
    previewLink: "https://24javascript.vercel.app/", // 미리보기 링크
    githubLink: "https://github.com/taeng00/24javascript", // GitHub 링크
  },
  {
    title: "HCJ demo", // 프로젝트 제목
    image: projectImage4, // 프로젝트 이미지
    description: `1학기 중간까지 진행했던 HCJ demo 프로젝트 입니다. 주로 HTML만을 이용하여 제작한 페이지 입니다.`, // 프로젝트 설명
    techstack: "HTML/CSS, JavaScript", // 사용된 기술 스택
    previewLink: "https://web-programming-wheat.vercel.app/", // 미리보기 링크
    githubLink: "https://github.com/taeng00/WebProgramming", // GitHub 링크
  },
  {
    title: "Blog", // 프로젝트 제목
    image: projectImage5, // 프로젝트 이미지
    description: `1학기 중간까지 진행했던 Blog 프로젝트 입니다. HTML과 CSS만을 이용하여 제작한 페이지 입니다.`, // 프로젝트 설명
    techstack: "HTML/CSS", // 사용된 기술 스택
    previewLink: "https://webblog-three.vercel.app/", // 미리보기 링크
    githubLink: "https://github.com/taeng00/webblog", // GitHub 링크
  },
  {
    title: "Next JS", // 프로젝트 제목
    image: projectImage6, // 프로젝트 이미지
    description: `1학기 기말까지 진행했던 Next JS 프로젝트 입니다.`, // 프로젝트 설명
    techstack: "Next JS", // 사용된 기술 스택
    previewLink: "https://24nextjs.vercel.app/", // 미리보기 링크
    githubLink: "https://github.com/taeng00/24nextjs", // GitHub 링크
  },
];

// Contact Details 
export const contactDetails = {
  email: "kth4111502@naver.com", // 이메일 주소
  phone: "010 1234 5678", // 전화번호
};
