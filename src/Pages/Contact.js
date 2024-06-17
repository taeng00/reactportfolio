import React from "react";
import { contactDetails } from "../Details"; // ../Details 모듈에서 contactDetails를 가져옴

function Contact() {
  const { email, phone } = contactDetails; // contactDetails에서 email과 phone을 가져옴
  return (
    <main className="container mx-auto max-width section">
      {/* 이메일과 전화번호를 보여주는 제목 */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        제 이메일과 전화번호 입니다! 
      </h1>
      {/* 이메일 링크 */}
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      {/* "or" 텍스트 */}
      <span className="text-center text-content text-xl font-light block">or</span>
      {/* 전화번호 링크 */}
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;

/*
2. 사용자의 이벤트에 따른 응답을 수행하도록 하는 getElementById, querySelector, addEventListener 등의 기능을 사용하였나? 
위의 코드는 React 컴포넌트로 이루어진 Contact 컴포넌트입니다.
1. contactDetails 모듈에서 email과 phone을 가져와 사용합니다.
2. JSX를 사용하여 UI를 정의합니다.
3. <h1> 태그는 제목을 표시하고, <h3> 태그는 이메일과 전화번호를 링크로 표시합니다.
4. 각 링크는 React의 인라인 표현식을 사용하여 mailto: 또는 tel: 링크를 생성합니다.
5. React의 가상 DOM을 사용하여 UI를 렌더링하고, 상태를 관리합니다.
6. 직접적인 DOM 조작이나 이벤트 핸들러 등의 DOM API 사용은 없습니다.

React에서는 가상 DOM을 활용하여 UI를 구성하고, 상태를 관리하며, JSX를 사용하여 UI를 정의합니다. 
DOM 조작과 이벤트 핸들링은 React의 이벤트 시스템을 통해 처리되므로, 직접적인 DOM API 사용은 보통 필요하지 않습니다.
*/
