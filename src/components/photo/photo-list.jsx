import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';

import PhotoListItem from './photo-list-item';

/**
 * @param items
 * @param columns
 * @returns {*}
 * @constructor
 */
function PhotoLatestList({ items, columns }) {
  return (
    <Grid>
      {_.chunk(items, columns).map((items, i) => (
        <Grid.Row columns={columns} key={i}>
          {items.map(({ id, src, to }) => (
            <Grid.Column key={id}>
              <PhotoListItem
                id={id}
                src={src}
                to={to}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  );
}

export default PhotoLatestList;
