import React, { useState } from 'react';
import {
  Dropdown,
  Grid,
  Header,
  Input,
  Form,
  Container,
  Button,
} from 'semantic-ui-react';
import PhotoEditor from '../components/photo/photo-editor';
import { verifyAndSave } from '../api';

const photoOptionList = [
  { key: 1, text: 'Option 1', value: 1 },
  { key: 2, text: 'Option 2', value: 2 },
  { key: 3, text: 'Option 3', value: 3 },
];

function PhotoDetail(props) {
  const [options, setOptions] = useState({
    photoOptions: undefined,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  const onChangeOptions = (e, data) => {
    setOptions({ ...options, [data.name]: data.value });
  };

  return (
    <Container>
      <Header as='h2'>
        Photo #{props.match.params.id}
      </Header>

      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Form.Field>
                <Dropdown
                  placeholder='Select option'
                  clearable
                  selection
                  name='photoOptions'
                  options={photoOptionList}
                  value={options.photoOptions}
                  onChange={onChangeOptions}
                />
              </Form.Field>
              <Form.Field>
                <Header as='h4'>Bounding box</Header>
              </Form.Field>
              <Form.Field>
                <label>Left</label>
                <Input
                  type='number'
                  name='left'
                  value={options.left}
                  onChange={onChangeOptions}
                />
              </Form.Field>
              <Form.Field>
                <label>Top</label>
                <Input
                  type='number'
                  name='top'
                  value={options.top}
                  onChange={onChangeOptions}
                />
              </Form.Field>
              <Form.Field>
                <label>Right</label>
                <Input
                  type='number'
                  name='right'
                  value={options.right}
                  onChange={onChangeOptions}
                />
              </Form.Field>
              <Form.Field>
                <label>Bottom</label>
                <Input
                  type='number'
                  name='bottom'
                  value={options.bottom}
                  onChange={onChangeOptions}
                />
              </Form.Field>
              <Form.Field>
                <Button positive fluid onClick={() => verifyAndSave(options)}>Verify & save</Button>
              </Form.Field>
              <Form.Field>
                <Button fluid onClick={props.history.goBack}>Cancel</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={12} >
            <PhotoEditor />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}


export default PhotoDetail;
