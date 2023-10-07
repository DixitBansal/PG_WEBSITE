import React, { useState } from 'react'
import HomeFood from './services/HomeFood';

export default function SubNavbar({ tab1, tab2, tab3, comp1, comp2, comp3 }) {
    // props me 3 tabs or 3 component aaynge jo render krane hai

    const initial_color = "#939393"
    const active_color = "#955DDA"
    const [tab1col, setTab1Col] = useState(active_color);
    const [tab2col, setTab2Col] = useState(initial_color);
    const [tab3col, setTab3Col] = useState(initial_color);

    const setAllInitial = () => {
        setTab1Col(initial_color);
        setTab2Col(initial_color);
        setTab3Col(initial_color);
    }

    const changeActiveCol = (elem) => {
        switch (elem) {
            case tab1:
                setAllInitial();
                setTab1Col(active_color);
                break;
            case tab2:
                setAllInitial();
                setTab2Col(active_color);
                break;
            case tab3:
                setAllInitial();
                setTab3Col(active_color);
                break;

            default:
                break;
        }
    }

    return (
        <>
            <div className=" flex flex-row flex-wrap mt-5 justify-around w-70vw m-auto bg-base-white align-middle justify-items-center text-subheadline gap-x-8 sm:gap-x-10 gap-y-5 p-4 px-10  drop-shadow-lg rounded-full md:w-2/3 xl:w-1/2">
                <div className='text-center' style={{ cursor: "pointer", color: tab1col, }} onClick={() => changeActiveCol(tab1)}>{tab1}</div>
                <div className='text-center' style={{ cursor: "pointer", color: tab2col }} onClick={() => changeActiveCol(tab2)}>{tab2}</div>
                <div className='text-center' style={{ cursor: "pointer", color: tab3col }} onClick={() => changeActiveCol(tab3)}>{tab3}</div>
            </div>

            <div className=" mt-5">
                {tab1col === active_color ? comp1 : tab2col === active_color ? comp2 : tab3col === active_color ? comp3 : ""}
            </div>
        </>
    )
}
