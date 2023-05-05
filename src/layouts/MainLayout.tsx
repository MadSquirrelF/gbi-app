import { FC } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SecondHeader from '../components/Header/SecondHeader';

const MainLayout: FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <SecondHeader/>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout