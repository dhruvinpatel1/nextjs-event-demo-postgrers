import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Menu({ menu }) {

    const [showSubMenu, setShowSubMenu] = useState(false);
    const [currentSubMenu, setCurrentSubMenu] = useState([]);
    const [menutitle, setmenutitle] = useState("");
    const [showSubSubMenu, setShowSubSubMenu] = useState(false);
    const [currentSubSubMenu, setCurrentSubSubMenu] = useState([]);
    const [submenutitle, setsubmenutitle] = useState("");
    const [subSubMenutitle, setSubSubMenuTitle] = useState("");
    const [submenuWidth, setSubmenuWidth] = useState();

    const handleMouseEnter = (submenuItems, menutitle) => {
        setShowSubMenu(true);
        setmenutitle(menutitle)
        setCurrentSubMenu(submenuItems);
    };

    const handleSubMenuMouseEnter = (subsubmenuItems, menusubtitle, menutitle) => {
        setShowSubSubMenu(true);
        setmenutitle(menutitle)
        setsubmenutitle(menusubtitle)
        setCurrentSubSubMenu(subsubmenuItems);
    };

    // const handleMenuMouseLeave = () => {
    //     setShowSubMenu(false);
    //     setmenutitle('');
    //     setShowSubSubMenu(false);
    // };

    // const handleSubMenuMouseLeave = () => {
    //     console.log("heloooooooooooooooo")
    //     setShowSubSubMenu(false);
    //     setCurrentSubSubMenu([])   
    // }
    useEffect(() => {
        const myDiv = document.getElementById('submenuwidth');
        if (myDiv) {
          const divWidth = myDiv.offsetWidth;
          setSubmenuWidth(divWidth)
        }
      });
    

    
    return (
        <div className="relative container !max-w-[1290px] mx-auto">
            <div className='flex'>
                <div className='w-[16.66%] inline-block'>
                    <div className='p-[10px]'>
                        <img src={`/bride-logo.png`} alt="logo" />
                    </div>

                </div>
                <div className='w-[66.66%] p-[10px] flex items-end'>
                    <div className='p-[10px] flex-grow'>
                        <div className='grid grid-cols-5 text-center'>
                            {menu.items.data.map((menuItem) => (
                                <div
                                    key={menuItem.id}
                                    onMouseEnter={() => handleMouseEnter(menuItem.attributes.children.data, menuItem.attributes.title)}
                                    onMouseLeave={() => { setShowSubMenu(false); setmenutitle(''); setShowSubSubMenu(false); setsubmenutitle(''); }}
                                    className="!relative py-[13px] px-[20px]"
                                >
                                    <Link href={menuItem.attributes.url} className={`text-[15px] uppercase font-semibold  ${(menuItem.attributes.title === menutitle || menuItem.attributes.title === "Home") ? "main_menu text-[#9E0851]" : 'text-[#767171]'} hover:after:content-[''] hover:after:absolute hover:after:bottom-[0px] hover:after:bg-[#9E0851] hover:after:w-full hover:after:h-[3px] hover:after:left-0 `} >{menuItem.attributes.title} {menuItem.attributes.children.data.length !== 0 && <ChevronDownIcon className="w-3 h-3 inline-block" />}</Link>
                                    {currentSubMenu.length !== 0 && showSubMenu && menuItem.attributes.title === menutitle && (
                                        <div id="submenuwidth" className="absolute left-0 top-[51px] bg-white z-20" onMouseLeave={() => { setShowSubSubMenu(false); setCurrentSubSubMenu([]); }}>
                                            <ul>
                                                {currentSubMenu.map((submenuItem) => (
                                                    <li key={submenuItem.id}
                                                        onMouseEnter={() => handleSubMenuMouseEnter(submenuItem.attributes.children.data, submenuItem.attributes.title, menuItem.attributes.title)}
                                                        className={`py-[13px] px-[20px] ${submenuItem.attributes.title === submenutitle ? "bg-[#9E0851] text-white" : "text-[#767171]"}`}

                                                    >
                                                        <Link href={submenuItem.attributes.url} className='text-[15px] font-semibold whitespace-nowrap'>{submenuItem.attributes.title} {submenuItem.attributes.children.data.length !== 0 && <ChevronRightIcon className="w-3 h-3 inline-block" />}</Link>
                                                        {currentSubSubMenu.length !== 0 && showSubSubMenu && submenuItem.attributes.title === submenutitle && (
                                                            <div className=" absolute top-4 bg-white z-20" style={{ left: submenuWidth }}>
                                                                <ul>
                                                                    {currentSubSubMenu.map((submenuItem) => (
                                                                        <li key={submenuItem.id}
                                                                            onMouseEnter={() => setSubSubMenuTitle(submenuItem.attributes.title)}
                                                                            onMouseLeave={() => setSubSubMenuTitle('')}
                                                                            className={`py-[13px] px-[20px] ${submenuItem.attributes.title === subSubMenutitle ? "bg-[#9E0851] text-white" : "text-[#767171]"}`}>
                                                                            <Link href={submenuItem.attributes.url} className='text-[15px] font-semibold whitespace-nowrap'>{submenuItem.attributes.title}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-[16.66%] p-[10px] flex items-end'>
                    <div className='p-[16px] flex-grow'>
                        <div className='text-right'>
                            <Link href="/exhibit" className='bg-[#9E0851] py-[15px] px-[30px] text-white text-base font-semibold rounded'>Exhibit</Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
