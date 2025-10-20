import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/Homelayout/LeftAside';
import RightAside from '../Components/Homelayout/RightAside';
import Loading from '../Components/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-10/12 mx-auto my-4'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-10/12 mx-auto my-4 grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    {state== 'loading' ? <Loading></Loading> : <Outlet></Outlet>}  
                </section>
                <aside className='col-span-3 sticky top-0 h-fit '>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;