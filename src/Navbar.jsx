import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
let page;
function determinePage () {
    if (window.location.pathname === '/') {
        page = 'home';
    } else if (window.location.pathname === '/settings') {
        page = 'settings';
    } else {
        console.log("failed to get page");
    }
}
export function NavBar() {
    determinePage();
    if (page === 'home') {
        return (
            <>
                <nav className="Rectangle2 fixed top-5 left-5 right-5 h-32 opacity-75 bg-neutral-900 rounded-2xl flex items-center px-57" />
                <ul className="flex justify-around w-full items-center">
                    <li><a href="/settings"><FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}}className="fixed w-[35px] h-[38px] left-57"/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}} /></a></li>
                    
                </ul>
            </>
        );
    } else if (page === 'settings') {
        return (
            <>
            <div id='nav'>
                <ul>
                    <li id="homeIcon"><a href="/">Home</a></li>
                </ul>
            </div>
            </>
        );
    }
}
