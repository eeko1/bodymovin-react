import {Link, Outlet} from 'react-router-dom';
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import homeAnimation from '../assets/lottie/uustalo.json';
import latausAnimation from '../assets/lottie/lataus.json';
import movementAnimation from '../assets/lottie/movement.json';
import {useEffect, useRef, useState} from 'react';

const Layout = () => {
  const [menuToggle,] = useState(false);


  const homeRef = useRef<LottieRefCurrentProps>(null);
  const hamburgerRef = useRef<LottieRefCurrentProps>(null);
  const latausRef = useRef<LottieRefCurrentProps>(null);
  const movementRef = useRef<LottieRefCurrentProps>(null);

  const hoverHandler = ( ) => {
    if (!homeRef.current) {
      return;
    }
      return homeRef.current.play();
  };

  const rewind = () => {
    if (!homeRef.current) {
      return;
    }
    return homeRef.current.goToAndStop(0);
  };

  const hoverHandler2 = ( ) => {
    if (!latausRef.current) {
      return;
    }
      return latausRef.current.play();
  };

  const rewind2 = () => {
    if (!latausRef.current) {
      return;
    }
    return latausRef.current.goToAndStop(0);
  };

  const hoverHandler3 = ( ) => {
    if (!movementRef.current) {
      return;
    }
      return movementRef.current.play();
  };

  const rewind3 = () => {
    if (!movementRef.current) {
      return;
    }
    return movementRef.current.goToAndStop(0);
  };

  useEffect(() => {
    if (!hamburgerRef.current) {
      return;
    }
    if (menuToggle) {
      hamburgerRef.current.setDirection(1);
    } else {
      hamburgerRef.current.setDirection(-1);
    }
    hamburgerRef.current.play();
  }, [menuToggle]);

  return (
    <div className="m-auto h-full w-11/12">
      <nav className="absolute right-0 flex flex-col-reverse items-end justify-end lg:relative lg:block lg:flex-row">
        <ul
          className={`
          mr-4
          justify-end
          overflow-hidden
          rounded-lg
          bg-slate-200
          p-0
          shadow-md
          transition-all
          duration-500
          ease-in-out
          lg:flex
          lg:opacity-100
          `}
        >
          <li>
            <Link className="block p-4 text-center  hover:bg-slate-300" to="/" onMouseEnter={hoverHandler}>
              <div className='flex it'>
                <Lottie lottieRef={homeRef} loop={false} className='h-4 w-4' animationData={homeAnimation} onComplete={rewind} />
                <span className='pl-1'>Talo animaatio</span>
              </div>
            </Link>
          </li>
          <li></li>
          <li>
            <Link className="block p-4 text-center  hover:bg-slate-300" to="example" onMouseEnter={hoverHandler2}>
              <div className='flex it'>
                <Lottie lottieRef={latausRef} loop={false} className='h-4 w-4' animationData={latausAnimation} onComplete={rewind2} />
                <span className='pl-1'>Lataus animaatio</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block p-4 text-center  hover:bg-slate-300" to="/" onMouseEnter={hoverHandler3}>
              <div className='flex it'>
                <Lottie lottieRef={movementRef} loop={false} className='h-4 w-4' animationData={movementAnimation} onComplete={rewind3} />
                <span className='pl-1'>random liikkeit animaatio</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="m-4 h-8 w-8 sm:block lg:hidden">
          <button>Menu</button>
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
