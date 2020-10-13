import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { Container, Header, Menu } from 'semantic-ui-react';
import { RouteWithSubRoutes } from './router';
import './app-shell.css';


/**
 *
 * @param props
 * @param {Array} props.routes
 * @returns {*}
 * @constructor
 */
function AppShell(props) {

  return (
    <Router>
      <Container className='app-shell'>
        <div className='app-shell__content'>
          <nav className='app-shell__nav'>
            <Menu.Item header as={Link} to='/'>
              <Header as='h1'>Face management</Header>
            </Menu.Item>
            <Menu secondary>
              {props.routes.map((route) => (
                <Menu.Item
                  as={NavLink}
                  key={route.path}
                  to={route.path}
                  exact={route.exact}
                >
                  {route.name}
                </Menu.Item>
              ))}
            </Menu>
          </nav>
          <main className='app-shell__main'>
            <RouteWithSubRoutes routes={props.routes}/>
          </main>
          <footer className="app-shell__footer">
            <Container>
              <span>© 2019 Innopolis University</span>
              {props.routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  exact={route.exact}
                >
                  {route.name}
                </NavLink>
              ))}
            </Container>
          </footer>
        </div>
      </Container>
    </Router>
  );
}

export default AppShell;
