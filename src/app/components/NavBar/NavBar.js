'use client'
import { useState } from "react";

let links = [
  {
    linkName: "Home",
    linkRoute: "/"
  },
  {
    linkName: "About",
    linkRoute: "/about"
  },
  {
    linkName: "Something",
    linkRoute: "/something"
  },
];

let linkLayout = links.map((link, key) => {
  return (
    <li className="text-lg" key={key}>
      {/* <a  className="p-2 rounded opacity-80 hover:opacity-100" href={link.linkRoute}>{link.linkName}</a> */}
      <NavBarLink linkRoute={link.linkRoute} linkName={link.linkName} />
    </li>
  )
})

export default function NavBar() {

  return (
    <>
    {/* {isMobile >= 1024 ? <DesktopNav onResize={handleResize}/> : <MobileNav  onResize={handleResize}/>} */}
      {/* <DesktopNav/> */}
    <DesktopNav/>
    <MobileNav />
    </>
  );
}

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(e => !e);
  }


  return (
    <nav className=" flex relative justify-between items-center bg-slate-100 p-3 lg:hidden">
      <div className="hover:cursor-pointer text-xl "><a href="/">GCMunoz</a></div>
      <button className=" rounded-lg text-xl py-2 z-50 hover:bg-slate-500" onClick={openMenu}>
        {menuOpen ? '📂': '📁'}
      </button>
      <ul className={menuOpen ? "transition duration-200 border-l-2 border-slate-300 min-h-screen top-full right-0 w-48 min-w-fit bg-slate-200 absolute" : "w-0 transition duration-200 overflow-hidden absolute"}>
        {linkLayout}
      </ul>
        
    </nav>
  );
}

function DesktopNav() {
  return (
    <nav className="justify-between py-5 px-4 hidden lg:flex">
      <div className="hover:cursor-pointer text-2xl"><a href="/">GCMunoz</a></div>
      <ul className="flex gap-4 justify-end">
        {links.map((link, key) => {
          return (
            <li className="text-lg" key={key}>
              {/* <a  className="p-2 rounded opacity-80 hover:opacity-100" href={link.linkRoute}>{link.linkName}</a> */}
              <NavBarLink styles="rounded" linkRoute={link.linkRoute} linkName={link.linkName} />
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

function NavBarLink({linkRoute, linkName, ...rest}) {
  return <a  className={"block p-2 hover:bg-slate-300 opacity-80 hover:opacity-100 transition" + " " + rest.styles} href={linkRoute}>{linkName}</a>
}