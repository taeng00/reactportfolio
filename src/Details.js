// Logo images
import logogradient from "./assets/taelogo.png";
import logo from "./assets/taelogo.png";
// Profile Image
import profile from "./assets/me.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// 로고 이미지들을 모듈로 가져와서 내보냄
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// 개인 정보 세부사항
export const personalDetails = {
  name: "taehyun Kim",
  tagline: "Welcome, webprogramming",
  img: profile,
  about: `중부대학교 정보보호학과에 4학년으로 재학중인 25살 19학번 김태현 이라고 합니다!`,
};

// 소셜 미디어 URL
export const socialMediaUrl = {
  github: "https://github.com/taeng00",
  instagram: "https://www.instagram.com/kimtxehyxn",
};

// 교육 세부사항
export const eduDetails = [
  {
    Position: "Information Security",
    Company: "Joongbu University",
    Location: "Goyang",
    Type: "Full Time",
    Duration: "Mar 2019 - Present",
  },
  {
    Position: "Frontend Development",
    Company: `Likelion 11th`,
    Location: "Goyang",
    Type: "1 year",
    Duration: "Mar 2023 - Dec 2023",
  },
];

// 기술 스택 및 도구
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  github: github,
  figma: figma,
};

// 프로젝트 세부사항
export const projectDetails = [
  {
    title: "1학기 팀 프로젝트",
    image: projectImage1,
    description: '1학기 기말 팀프로젝트 입니다. 1학기 중간고사 때 완성 시켰던 팀소개 페이지가 내장 되어 있습니다.',
    techstack: "React, Next JS",
    previewLink: "https://24webteam.vercel.app/",
    githubLink: "https://github.com/taeng00/24webteam",
  },
  {
    title: "1학기 중간 개인 포트폴리오",
    image: projectImage2,
    description: `1학기 중간 개인 포트폴리오 입니다. 저에 대한 간략한 소개와 1학기에 진행했던 프로젝트들, SECON 참관 보고서가 내장 되어 있습니다.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://my-portfolio-puce-seven-75.vercel.app/",
    githubLink: "https://github.com/taeng00/MyPortfolio",
  },
  {
    title: "Javascript 예제",
    image: projectImage3,
    description: `1학기 중간 이후부터 진행했던 Javascript를 통한 예제들을 담은 프로젝트 입니다. `,
    techstack: "JavaScript, HTML/CSS",
    previewLink: "https://24javascript.vercel.app/",
    githubLink: "https://github.com/taeng00/24javascript",
  },
  {
    title: "HCJ demo",
    image: projectImage4,
    description: `1학기 중간까지 진행했던 HCJ demo 프로젝트 입니다. 주로 HTML만을 이용하여 제작한 페이지 입니다.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://web-programming-wheat.vercel.app/",
    githubLink: "https://github.com/taeng00/WebProgramming",
  },
  {
    title: "Blog",
    image: projectImage5,
    description: `1학기 중간까지 진행했던 Blog 프로젝트 입니다. HTML과 CSS만을 이용하여 제작한 페이지 입니다.`,
    techstack: "HTML/CSS",
    previewLink: "https://webblog-three.vercel.app/",
    githubLink: "https://github.com/taeng00/webblog",
  },
  {
    title: "Next JS",
    image: projectImage6,
    description: `1학기 기말까지 진행했던 Next JS 프로젝트 입니다.`,
    techstack: "Next JS",
    previewLink: "https://24nextjs.vercel.app/",
    githubLink: "https://github.com/taeng00/24nextjs",
  },
];

// Contact Details 
export const contactDetails = {
  email: "kth4111502@naver.com",
  phone: "010 1234 5678",
};
