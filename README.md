# LUSH Clone Project

- 비건 프레쉬 코스메틱 브랜드 - 러쉬(LUSH) 사이트 클론.

## HHYYY - 훈훈한 연들
- 팀워크를 다지고자, 팀원들 이름을 바탕으로 팀명을 정했습니다.
- 팀원들 각자의 기술에 익숙해지는 것을 목표로 하여, 페이지 단위로 개발하였습니다.
- 팀원들 수준별로 적절한 역할 분담과 애자일한 스크럼 방식의 미팅, 그리고 활발한 의사소통으로 프로젝트를 성공적으로 마무리하였습니다.
- 기획 과정 없이 짧은 기간 안에 기술 습득 및 기본 기능 구현에 집중하기 위해 러쉬 사이트를 참고하였으며, 실제 서비스 개발 과정과 마찬가지로 무에서 유를 창조했습니다.


## 개발 기간 및 개발 인원
- 개발 기간 : 2021-10-04 ~ 2021-10-15 (공휴일 포함)
- 개발 인원<br />
   ✔️  **Front-End** 3명 : 박미연, 박세연, 윤수연<br />
   ✔️  **Back-End** 2명 : 김지훈, 박치훈<br />
   
## 프로젝트 구현 영상
- 📎 [유튜브 영상 링크](https://youtu.be/dZ92JHGZodI)
- **Reference** : 이 프로젝트는 러쉬 사이트를 참조하여 학습 목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.

## 적용 기술 및 구현 페이지
> ✔️ **Front-End** : React, SASS, JSX<br />
> ✔️ **Back-End** : Django, Python, MySQL, jwt, bcypt, AWS RDS, AWS EC2<br />
> ✔️ **Common** : Git, Github, Slack, Trello, Postman<br />

### Front-End 구현 페이지
- 메인 페이지
  - 헤더 : 박세연

- 로그인 페이지 : 박세연
- 장바구니 페이지 : 박세연
- 검색창 드롭 메뉴 : 박세연

# 구현 기능 상세

### 박세연
   - **헤더 구현**
     - mouse hover 시, navigation bar 툴팁 창 및 user page (로그인, 회원가입 등) 툴팁 창이 뜨도록 조건부렌더링을 통해 구현
     - Nav 돋보기 아이콘 클릭 시 Search Modal 구현
     - ![헤더 구현 영상](https://user-images.githubusercontent.com/62207127/145955106-9ea66c5c-6bef-4a18-beab-6479101a2eaa.gif)
   - **Search Modal 구현**
      - 사용자가 입력한 검색어를 검색결과페이지에 쿼리스트링을 이용하여 url 주소에 협의된 데이터를 파라미터로 전달
      - ![검색창 구현 영상](https://user-images.githubusercontent.com/62207127/145956039-94fe0693-e5ea-473a-b5c1-92dfd11f0b3d.gif)
   - **장바구니 구현**
      - 회원과 비회원을 토큰값으로 구분하여, 조건부렌더링으로 회원/비회원 화면 적용.
      - 회원인 경우 장바구니에 담은 물건을 수량 그대로 옮겨와 장바구니 페이지 결과에 보이게 함
      - 맵함수를 이용하여 상품추가 구현
      - ![장바구니 구현 영상](https://user-images.githubusercontent.com/62207127/145956464-34494361-de51-432e-a129-c8748fa30bf3.gif)
   - **로그인 구현**
      - 로그인 유효성 검사 (아이디 @과 . 포함, 비밀번호 8자 이상 및 특수문자 포함, 조건에 충족하지 않으면 버튼 비활성화)
      - 로그인 버튼 클릭시 유효성 검사 후 메인으로 이동
      - JWT와 로컬스토리지를 사용한 로그인
      - ![로그인 구현 영상](https://user-images.githubusercontent.com/62207127/145955620-e9cb5127-b906-4e5f-bbc5-71af81417c30.gif)
