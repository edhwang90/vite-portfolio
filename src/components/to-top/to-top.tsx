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
        <img className="arrow-up" alt="arrow-up" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739206312/arrow-up_vviivr.png"></img>
      </button>
    </div>
  )
}

export default ToTop;