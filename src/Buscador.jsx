import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import './Buscador.css'

const Buscador = ({ setValueToSearch }) => {
  const [data, setData] = useState('')
  const [toSearch, setToSearch] = useState('starwars')
  const inputHandler = (e) => {
    const searchWord = e.target.value
    setData(searchWord)
  }
  const handleSubmit = (e) => {
    setToSearch(data)
    setValueToSearch(toSearch)
  }

  useEffect(() => {
    console.log(data)
  }, [toSearch])

  return (
    <section className='buscador'>
      <Container>
        <Row>
          <Col><FontAwesomeIcon icon={faSearch} size='lg' className='lupa' /></Col>
          <Col><input
            type='text'
            name='buscador'
            id='buscador'
            placeholder='busca una película'
            value={data}
            onChange={inputHandler}
            className='form-control'
               />
          </Col>
          <Col><Button variant='primary' onClick={handleSubmit}>Buscar</Button>{' '}</Col>
        </Row>
      </Container>
    </section>
  )
}

export default Buscador
