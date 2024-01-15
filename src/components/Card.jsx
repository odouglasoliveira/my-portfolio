import propTypes from 'prop-types'

export default function Card({title, image, description, deploy_url, repo_url}) {
  return (
    <>
      <section className='shadow-xl w-2/6 p-8 rounded-xl'>
        <img className='w-100 rounded-md' src={image} alt={`Imagem do projeto ${title}`} />
        <p className='font-bold py-4'>{title}</p>
        <p className='pb-4'>{description}</p>
        <section className='flex justify-between flex-wrap'>
          <a className='bg-blue-600 hover:bg-blue-800 duration-200 text-white py-2 px-4 rounded-md' target='_blank' href={deploy_url} rel="noreferrer">Deploy</a>
          <a className='bg-blue-600 hover:bg-blue-800 duration-200 text-white py-2 px-4 rounded-md' target='_blank' href={repo_url} rel="noreferrer">Repositório</a>
        </section>
      </section>
    </>
  )
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  deploy_url: propTypes.string.isRequired,
  repo_url: propTypes.string.isRequired,
}