import Card from 'react-bootstrap/Card'
import Tags from './Tags'

const MyCard = ({ imagen, titulo, descripcion, colorTag, textoTag }) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>
        {descripcion}
      </Card.Text>
    </Card.Body>
    <Tags colorTag={colorTag} textoTag={textoTag}/>
  </Card>
  )
}

export default MyCard
