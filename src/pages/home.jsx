import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Grid, Image } from 'semantic-ui-react';

export default () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> Aenean commodo ligula eget dolor.
      Aenean massa strong. Cum sociis natoque penatibus et magnis <br/>dis parturient montes, nascetur
      ridiculus mus.
    </p>
    <p>
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br/> Nulla
      consequat massa quis enim. Donec pede justo, <br/> fringilla vel, aliquet nec, vulputate eget, arcu.
      In enim justo, rhoncus ut, imperdiet a,<br/> venenatis vitae, justo.
    </p>

    <Grid columns={3} style={{marginTop: 54}}>
      <Grid.Row>
        <Grid.Column as={Link} to='/photos' textAlign='center'>
          <Image src='/images/image-text.png' />
          <Header as='h3'>Photos</Header>
        </Grid.Column>

        <Grid.Column as={Link} to='/people' textAlign='center'>
          <Image src='/images/image-text.png' />
          <Header>People</Header>
        </Grid.Column>

        <Grid.Column as={Link} to='/classifiers' textAlign='center'>
          <Image src='/images/image-text.png' />
          <Header>Classifiers</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </Container>
);

