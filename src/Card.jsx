import Card from 'react-bootstrap/Card';

const Cards = ({ array }) => {
    return (
<ul>
          {array.map((book) => (
              <Card key={book.id} className="card d-flex flex-column">
                
                <Card.Img className="bookCards" variant="top" src={
        book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : 'no-image-available.jpg'
      }
      alt={book.volumeInfo.title} />
      <Card.Body className="d-flex flex-column">
      <Card.Title>{book.volumeInfo.title}</Card.Title>
      <Card.Text className="text-sm flex-grow-1">
                     <div>
                <strong></strong> by{' '}
                {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')} (
                {book.volumeInfo.publishedDate})
              </div>
        </Card.Text>
      </Card.Body>
      </Card>
          ))}
          </ul>

    ) }
    

    export default Cards;