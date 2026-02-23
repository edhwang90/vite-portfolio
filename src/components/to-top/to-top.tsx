import { ArrowUpIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ToTop = () => {
  const [showTop, setShowTop] = useState(false);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowTop(true);
      } else { setShowTop(false) }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed-top">
      {
        showTop &&
        <button onClick={onClick} className="top-link">
          <span>to top</span>
          <ArrowUpIcon className="nav-arrow" />
        </button>
      }

    </div>
  )
}

export default ToTop;