import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import { CutStore, FrameBgStore } from "./context/Context";

import Editframe from "./components/frame/Editframe";
import Uploadimg from "./components/frame/Uploadimg";
import SetTitle from "./pages/SetTitle/index";
import Root from "./Router/Root";
import Home from "./pages/Home";
import SelectCut from "./pages/Select/SelectCut";
import SelectFrame from "./pages/Select/SelectFrame";
import SelectFrameType from "./pages/Select/SelectFrameType";

const GlobalStyle = createGlobalStyle`
 *{
      margin: 0;
      padding: 0;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  body {
    text-align: center;
    margin: 0 auto;
    max-width: 479px;
  }
  .hidden {height:100%; min-height:100%; overflow:hidden !important; touch-action:none;}
`;

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root />,
//     },
//     {
//         path: "/Editframe",
//         element: <Editframe />,
//     },
//     {
//         path: "/Uploadimg",
//         element: <Uploadimg />,
//     },
// ]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/frame",
        element: <Editframe />,
    },
    {
        path: "/Uploadimg",
        element: <Uploadimg />,
    },
    {
        path: "/title",
        element: <SetTitle />,
    },
    {
        path: "/selectCut",
        element: <SelectCut />,
    },
    {
        path: "/selectFrame",
        element: <SelectFrame />,
    },
    {
        path: "/selectFrametype",
        element: <SelectFrameType />,
    },
]);

function App() {
    /*
      모바일 환경에서 100vh 사용시 생기는 스크롤 버그 문제 방지 코드
      사용하고자 하는 페이지 최상당 layout 사이즈  height: calc(var(--vh, 1vh) * 100) 로 설정하여 사용
      */
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return (
        <div className="App">
          <CutStore>
            <FrameBgStore>
              <GlobalStyle />
              <RecoilRoot>
                  <RouterProvider router={router} />
              </RecoilRoot>
            </FrameBgStore>
          </CutStore>
        </div>
    );
}

export default App;
