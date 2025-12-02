export default function CoreConcepts({image, title, description}) {
  return (
    <li>
      <img src={image} alt='alternate image'  />
      <h3>{title}</h3>
      <p>{description}</p>       
    </li>
  )
}