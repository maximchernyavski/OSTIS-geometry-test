import { ConfigProvider } from 'antd';
import { BrowserRouter ,Route, Routes } from 'react-router';
import './App.css';
import '@fontsource/asap'
import Test1 from './pages/theory-tests-problems/seventh-grade/tests/test1';
import Theme1 from './pages/theory-tests-problems/seventh-grade/theory/theme1/theme1-theory';
import SeventhGradeTTP from './pages/theory-tests-problems/seventh-grade/seventh-grade';
import Profile from './pages/profile/profile';
import Authorization from './pages/authorization/authorization';
import Home from './pages/home/home';
import Help from './pages/help/help'

function App() {
  return (
    <div className='App'>
      <ConfigProvider
        theme={{
            components: {
              Tabs: {
                inkBarColor: '#84B7EE',
              },
              Anchor: {
                fontSize: '16px',
                colorText: '#7B92DB',
                colorPrimary: '#4F6DCF',
                linkPaddingInlineStart: '3px',
              },
              Form: {
                labelColor: '#45A8FF',
                labelFontSize: '20px',
                labelColonMarginInlineStart: '5px',
              },
              Checkbox: {
                colorText: '#45A8FF',
                fontSize: '20px',
              },
            },
            token: {
              fontFamily: 'Asap',
            }
          }}
        >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Authorization />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/help' element={<Help />} />
            <Route path='/seven-grade-tests-theory-problems'>
              <Route path='' element={<SeventhGradeTTP />} />
              <Route path='test1' element={<Test1 />} />
              <Route path='theme1' element={<Theme1 />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Test1 /> */}
        {/* < Theme1 /> */}
        {/* <SeventhGradeTTP /> */}
        {/* <Profile /> */}
        {/* <Authorization /> */}
        {/* <Home /> */}
      </ConfigProvider>
    </div>
  );
}

export default App;
