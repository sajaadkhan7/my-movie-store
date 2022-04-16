import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../../images/img.jpg';
import { Button } from 'react-bootstrap';

const MoviesCards = () => {
    return (
        <div className='container'>
             <h2 className="container mt-3"> New To Watch </h2>
        <Row xs={1} sm={2}  lg={4} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card className='shadow-lg'>
              <Card.Img variant="top" src={HomeImg}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
            </Row>
            
            <h2 className="container mt-3"> Action </h2>
            <Row xs={1} sm={2}  lg={4} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card className='shadow-lg'>
              <Card.Img variant="top" src={HomeImg}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
            </Row>
            <h2 className="container mt-3">Horror</h2>
            <Row xs={1} sm={2}  lg={4} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card className='shadow-lg'>
              <Card.Img variant="top" src={HomeImg}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
            </Row>
            <div className='container mt-3 d-flex flex-row-reverse'>
                <a href='/list' className='btn btn-dark' variant="dark">Show More..</a>    
            </div>

        </div>
    );
};

export default MoviesCards;