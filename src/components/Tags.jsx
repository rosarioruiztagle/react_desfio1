import Badge from 'react-bootstrap/Badge'

const Tags = ({ colorTag, textoTag }) => {
  return (
    <Badge bg={colorTag}>{textoTag}</Badge>
  )
}

export default Tags
