# Netflix React App

## api
    ### axios : movie DB api를 가져오는 api
    ### request : movie DB / 영화 종류 별 DB 가져오는 api
## hooks
    ### useClickOutside : react-dom 의 useRef를 사용하여 현 위치에 있는 요소를 가져오는 react hook
    ### useDebound : fetch 시 setTimeout을 주기 위한 react hook
## Main Page
<img width="1425" alt="스크린샷 2024-03-04 오후 3 46 14" src="https://github.com/immyeong/react-netflix/assets/62759873/c693d72f-4928-4377-b57c-43c1d1418211">

    ### nav
    -logo : 클릭 시 Main Page load
    -searchBar : 키보드 입력 시 react 라이브러리의 useNavigation을 사용하여 Detail Page/MovieId load
    
    ### banner
    - play btn : 버튼 클릭 시 영상 재생
    - more info btn : 버튼 클릭 시 Detail Page load
    
    ### Contents :
    - 일치하는 영화 리스트들의 이미지를 화면에 출력
    - react Swiper 라이브러리를 사용하여 슬라이드 구현
    - 이미지 클릭 시 MovieModal 실행

## Search Page
<img width="1426" alt="스크린샷 2024-03-04 오후 3 47 35" src="https://github.com/immyeong/react-netflix/assets/62759873/38bf644e-0426-4a8b-9856-5fc8b1cea17f">

    ### Page Load
    - useLocation을 사용하여 params에 접근
    - query.get()함수로 url의 q값을 가져옴
    - q(movieId) 값에 일치하는 Search Page load
    - load 된 이미지 클릭 시 useNavigation을 사용하여 Detail Page load

## Detail Page
<img width="1425" alt="스크린샷 2024-03-04 오후 3 47 08" src="https://github.com/immyeong/react-netflix/assets/62759873/d878f7e1-aec1-4a36-a839-21b88544dcb3">

    ### Detail Page
    - movieData를 fetch하여 화면에 출력
