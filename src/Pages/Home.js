import React, { useRef, useEffect } from "react";
import gsap from "gsap"; // import gsap from "gsap";: GSAP 라이브러리를 가져옵니다. GSAP은 JavaScript를 사용하여 애니메이션을 제어하는 데 도움을 줍니다.
import { personalDetails } from "../Details"; 
// personalDetails 객체를 가져옵니다. 이 객체는 이름(name), 태그라인(tagline), 이미지(img)와 같은 개인 정보를 포함합니다.

function Home() {
  const { name, tagline, img } = personalDetails; // personalDetails에서 name, tagline, img를 추출합니다.
  const h11 = useRef(); // h11 요소의 참조를 생성합니다.
  const h12 = useRef(); // h12 요소의 참조를 생성합니다.
  const h13 = useRef(); // h13 요소의 참조를 생성합니다.
  const myimageref = useRef(); // myimageref 요소의 참조를 생성합니다.

  useEffect(() => {
    // useEffect() 훅을 사용하여 컴포넌트가 마운트된 후 GSAP을 사용하여 요소들을 애니메이션화합니다.

    const tl = gsap.timeline(); // GSAP의 타임라인을 생성합니다.

    // GSAP을 사용하여 각 요소를 애니메이션화합니다.
    tl.from(
      h11.current, // h11 요소를 사용하여 애니메이션을 적용합니다.
      {
        x: "-100%", // x축으로 왼쪽에서 오른쪽으로 이동합니다.
        delay: 0.8, // 0.8초 후에 애니메이션을 시작합니다.
        opacity: 0, // 처음에는 투명도가 0입니다.
        duration: 2, // 애니메이션의 지속 시간은 2초입니다.
        ease: "Power3.easeOut", // 이징 함수로 Power3.easeOut을 사용합니다.
      },
      "<" // 이전 애니메이션의 완료 후 실행됩니다.
    )
      .from(
        h12.current, // h12 요소를 사용하여 애니메이션을 적용합니다.
        {
          x: "-100%", // x축으로 왼쪽에서 오른쪽으로 이동합니다.
          delay: 0.5, // 0.5초 후에 애니메이션을 시작합니다.
          opacity: 0, // 처음에는 투명도가 0입니다.
          duration: 2, // 애니메이션의 지속 시간은 2초입니다.
          ease: "Power3.easeOut", // 이징 함수로 Power3.easeOut을 사용합니다.
        },
        "<" // 이전 애니메이션의 완료 후 실행됩니다.
      )
      .from(
        h13.current, // h13 요소를 사용하여 애니메이션을 적용합니다.
        {
          x: "-100%", // x축으로 왼쪽에서 오른쪽으로 이동합니다.
          delay: 0.1, // 0.1초 후에 애니메이션을 시작합니다.
          opacity: 0, // 처음에는 투명도가 0입니다.
          duration: 2, // 애니메이션의 지속 시간은 2초입니다.
          ease: "Power3.easeOut", // 이징 함수로 Power3.easeOut을 사용합니다.
        },
        "<" // 이전 애니메이션의 완료 후 실행됩니다.
      )
      .from(
        myimageref.current, // myimageref 요소를 사용하여 애니메이션을 적용합니다.
        {
          x: "200%", // x축으로 오른쪽에서 왼쪽으로 이동합니다.
          delay: 0.5, // 0.5초 후에 애니메이션을 시작합니다.
          opacity: 0, // 처음에는 투명도가 0입니다.
          duration: 2, // 애니메이션의 지속 시간은 2초입니다.
          ease: "Power3.easeOut", // 이징 함수로 Power3.easeOut을 사용합니다.
        },
        "<" // 이전 애니메이션의 완료 후 실행됩니다.
      );
  }, []); // useEffect의 의존성 배열이 비어 있어, 컴포넌트가 처음 렌더링될 때만 실행됩니다.

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      {/* 왼쪽 섹션: 이름과 태그라인 */}
      <div>
        <h1
          ref={h11} // h11 요소에 ref를 설정합니다.
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12} // h12 요소에 ref를 설정합니다.
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name} {/* 이름을 표시합니다. */}
        </h1>
        <h2
          ref={h13} // h13 요소에 ref를 설정합니다.
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline} {/* 태그라인을 표시합니다. */}
        </h2>
      </div>
      {/* 오른쪽 섹션: 이미지 */}
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="me" /> {/* 이미지를 표시합니다. */}
      </div>
    </main>
  );
}

export default Home;
