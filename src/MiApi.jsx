import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Buscador from './Buscador'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MiApi.css'

const MiApi = () => {
  const [result, setResult] = useState([])

  const fetchMovieApi = async (words) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=49d525a5&r=json&type=movie&s=${words}`)
      const data = await response.data
      setResult(data.Search)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMovieApi('star wars')
  }, [])

  return (
    <section>
      <Buscador setValueToSearch={fetchMovieApi} />
      <Container fluid className='container'>
        <Row>
          {result.map((movie) => (
            <Col key={movie.imdbID} sm={6} md={5} lg={3}>
              <Card className='movie'>
                <Card.Img variant='top' src={movie.Poster === 'N/A' ? './src/assets/unnamed.png' : movie.Poster} />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>{movie.Title}({movie.Year})</Card.Title>
                  <Button variant='primary'>Información</Button>
                </Card.Body>
              </Card>
            </Col>))}
        </Row>
      </Container>
    </section>
  )
}

export default MiApi
