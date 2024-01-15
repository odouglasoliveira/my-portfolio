import propTypes from 'prop-types'

export default function Card({title, image, description, url}) {
  return (
    <>
      <section className='shadow-xl w-fit p-8 rounded-xl h-60'>
        <img src={image} alt={`Imagem do projeto ${image}`} />
        <p>{title}</p>
        <p>{description}</p>
        <a href={url}></a>
      </section>
    </>
  )
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
}