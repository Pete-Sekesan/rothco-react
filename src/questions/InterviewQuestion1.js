import axios from 'axios';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
export default function Question1() {
  let [users, setUsers] = useState([]);
  let [name, setName] = useState('');
  useEffect(() => {
    if (users.length == 0) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          let users = response.data;
          setUsers(users);
        });
    }
  }, [users]);

  /**
   * @function filter
   * @param name
   * @param users
   *
   * @returns {Array<Object>}
   *
   * @description Should return a list of users
   */
  function filter(name, users) {
    return users;
  }
  /**
   * @function filteredUsers
   * @param name
   * @param users
   *
   * @returns {Array<Object>}
   *
   * @description Memoized(high performance) version of filter function
   */
  let filteredUsers = _.memoize(filter);
  return (
    <>
      <Container size='sm'>
        <Row>
          <Col>
            <h1>Question 1</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We've received a list of users from our fictionary endpoint. We
              need to be able to view this information in a table with the first
              name, last name, username and then a link to their website.{' '}
            </p>
            <p>
              <i>
                It's not required, but if you can filter the list of users by
                their first or last name, that is preferred
              </i>
            </p>
          </Col>
        </Row>
        <Row className='mb-1'>
          <Form>
            <Form.Label className='mt-3 mb-3'>Search</Form.Label>
            <Form.Control type='text' />
            <Button className='mt-3' variant='primary' type='submit'>
              Search
            </Button>
          </Form>

          {/**
           * Hint. If you want to do the bonus part, use Form.Control. It's a version of the HTML Input
           *  <Form.Control placeholder="Search by Name" plaintext />
           */}
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {
                //Display users in table rows herre
                users.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.website}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
