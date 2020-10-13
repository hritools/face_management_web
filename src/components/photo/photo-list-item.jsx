import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';


/**
 *
 * @param id
 * @param src
 * @param to
 * @returns {*}
 * @constructor
 */
function PhotoListItem({ id, src, to }) {
  return (
    <Link
      to={to}
    >
      <Image src={src} />
    </Link>
  );
}

export default PhotoListItem;
