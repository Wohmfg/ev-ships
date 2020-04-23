import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { Col, Container, Row } from 'react-bootstrap';

class CheckboxContainer extends Component {

  render() {
    return(
      <Container>
        <Row>
        {
          this.props.checkboxes.map(checkbox => {
          return (
            <Col xs={4} key={checkbox}>
              <Checkbox faction={checkbox} checkCheckbox={this.props.checkCheckbox}/>
            </Col>
            )
            }
          )
        }
        </Row>
      </Container>
  )};
}

export default CheckboxContainer;
