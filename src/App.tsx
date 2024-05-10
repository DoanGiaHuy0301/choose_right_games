import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { RouteKey, rc } from './routes'
import { AppLayout } from './components/AppLayout'
import { HomePages } from './pages/Home'
import { PrizePages } from './pages/Prize'
import { RanksPages } from './pages/Rank'
import { RulesPages } from './pages/Rules'
import { SettingPages } from './pages/Setting'
import { CountdownPages } from './pages/Home/pages/countdown'
import { PlayPages } from './pages/Home/pages/play'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={rc(RouteKey.Home).path}
          element={
            <AppLayout>
              <HomePages />
            </AppLayout>
          }
        />
        <Route
          path="/"
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        >
          {/* <Route path={rc(RouteKey.Home).path} element={ <HomePages />} /> */}
          <Route path={rc(RouteKey.Prize).path} element={<PrizePages/>} />
          <Route path={rc(RouteKey.Ranks).path} element={<RanksPages/>} />
          <Route path={rc(RouteKey.Rules).path} element={<RulesPages/>} />
          <Route path={rc(RouteKey.Setting).path} element={<SettingPages/>} />
          <Route path={rc(RouteKey.Countdown).path} element={<CountdownPages/>} />
          <Route path={rc(RouteKey.Play).path} element={<PlayPages/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
