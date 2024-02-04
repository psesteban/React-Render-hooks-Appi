import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Buscador from './Buscador'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MiApi.css'
import LoadingGif from './assets/rendering.gif'

const MiApi = () => {
  const [result, setResult] = useState([])
  const [sortOption, setSortOption] = useState('Default')
  const [loading, setLoading] = useState(false)

  const fetchMovieApi = async (words) => {
    try {
      setLoading(true)
      const response = await axios.get(`https://www.omdbapi.com/?apikey=49d525a5&r=json&type=movie&s=${words}`)
      const data = response.data
      setResult(data.Search)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const selectOrder = (sortOption) => {
    setSortOption(sortOption)
  }

  useEffect(() => {
    if (sortOption === 'Year') {
      const dataOrdenada = [...result].sort((a, b) => a.Year - b.Year)
      setResult(dataOrdenada)
    } else if (sortOption === 'Title') {
      const dataOrdenada = [...result].sort((a, b) => a.Title.localeCompare(b.Title))
      setResult(dataOrdenada)
    }
  }, [sortOption])

  return (
    <section>
      <Buscador setValueToSearch={fetchMovieApi} optionSelect={selectOrder} />
      <Container fluid className='container'>
        {loading
          ? (<img src={LoadingGif} className='bar' alt='Cargando...' />)
          : (
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
            </Row>)}
      </Container>
    </section>
  )
}

export default MiApi
