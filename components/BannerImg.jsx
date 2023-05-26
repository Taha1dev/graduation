const BannerImg = (props) => {
  return (
    <img
      src={props.src}
      alt="Banner image"
      className="w-100 px-0"
      style={{ height: `${props.height}` }}
    />
  );
};

export default BannerImg;
