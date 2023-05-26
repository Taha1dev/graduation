function CarouselButton(props) {
  return (
    <button
      type="button"
      data-bs-target={props.target}
      data-bs-slide-to={props.slideTo}
      className={props.active ? 'active' : ''}
      aria-current={props.active ? 'true' : 'false'}
      aria-label={`Slide ${props.slideTo + 1}`}
    />
  );
}
export default CarouselButton