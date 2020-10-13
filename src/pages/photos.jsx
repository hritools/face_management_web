import React, { useReducer, createContext } from 'react';
import { Container, Header, Grid, Dropdown, Pagination } from 'semantic-ui-react';

import PhotoList from '../components/photo/photo-list';
import PhotoFilter from '../components/photo/photo-filter';
import { useApi } from '../api';

const SortOptions = [
  { key: 'data', text: 'data', value: 'data', content: 'Date' },
  { key: 'person', text: 'person', value: 'person', content: 'Person' },
  { key: 'camera', text: 'camera', value: 'camera', content: 'Camera' },
];

const InitialState = {
  filter: {
    query: '',
    option: '',
    skills: [],
  },
  sort: SortOptions[0].value,
  activePage: 1,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "filter.update":
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.name]: action.value,
        }
      };
    case "sort.update":
      return {
        ...state,
        sort: action.value,
      };
    case "activePage.update":
      return {
        ...state,
        activePage: action.value,
      };
    default:
      return;
  }
};

const Context = createContext(InitialState);

function Photos() {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const latestPhotos = useApi(
    'photos.getLatest',
    {},
    { items: [] },
    );

  const photos = useApi(
    'photos.get',
    {
      filter: state.filter,
      sort: state.sort,
      activePage: state.activePage,
    },
    { items: [], meta: { activePage: 1, totalPages: 1 } },
    Object.values(state.filter)
      .concat(state.sort)
      .concat(state.activePage),
  );

  return (
    <Container>
      <Header as='h4'>Latest photos</Header>
      <PhotoList
        items={latestPhotos.items}
        columns={5}
      />
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h4'>Filter</Header>
            <Context.Provider value={{ filter: state.filter, dispatch }}>
              <PhotoFilter context={Context}/>
            </Context.Provider>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h4'>
              <span style={{fontWeight: 'normal'}}>
                Sorted by{' '}
              </span>
              <Dropdown
                value={state.sort}
                onChange={(e, data) => dispatch({ type: 'sort.update', value: data.value })}
                options={SortOptions}
                inline
              />
            </Header>
              <PhotoList
                columns={3}
                items={photos.items}
              />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column width={12} textAlign='center'>
            <Pagination
              activePage={state.activePage}
              totalPages={photos.meta.totalPages}
              onPageChange={(e, data) => dispatch({ type: 'activePage.update', value: data.activePage })}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Photos;
