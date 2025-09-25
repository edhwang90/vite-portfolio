import { ArrowUpIcon } from "@phosphor-icons/react";

const ToTop = () => {

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="fixed-top">
      <button onClick={onClick} className="home-link fixed-link">
        <span>top</span>
        <ArrowUpIcon className="nav-arrow" />
      </button>
    </div>
  )
}

export default ToTop;