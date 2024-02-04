import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Button, Container, Col, Row, Form } from 'react-bootstrap'
import './Buscador.css'

const Buscador = ({ setValueToSearch, optionSelect }) => {
  const [data, setData] = useState('')
  const [sortOption, setSortOption] = useState('')

  const inputHandler = (e) => {
    const searchWord = e.target.value
    setData(searchWord)
  }
  const handleSubmit = (e) => {
    if (data.trim() !== '') {
      setValueToSearch(data)
    }
  }

  const handleSortChange = (e) => {
    const option = e.target.value
    setSortOption(option)
  }

  useEffect(() => {
    optionSelect(sortOption)
  }, [sortOption])

  return (
    <section className='buscador'>
      <Container>
        <Row>
          <Col className='input'>
            <FontAwesomeIcon icon={faSearch} size='lg' className='lupa' />
            <input
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
          <Col>
            <Form.Select className='order' onChange={handleSortChange}>
              <option value='Year'>Ordenar por</option>
              <option value='Year'>Año</option>
              <option value='Title'>Título</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Buscador
