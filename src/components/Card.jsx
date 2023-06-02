import PropTypes from 'prop-types';

export default function Card(props) {
  const { link, image } = props;
  return (
    <>
      <a href={link}>
        <img src={image} />
      </a>
    </>
  )
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}