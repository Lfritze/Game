import React from 'react';
import { Header } from 'semantic-ui-react';

export default () => (
  <Header as='h2' icon inverted textAlign='center' className='title'>
    John Conway's Game of Life!
      <Header.Subheader>
      Cellular Automata Pixel Connectivity
      </Header.Subheader>
  </Header>

);