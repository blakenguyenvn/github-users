import * as React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

interface HomePageState {
  title: string,
  heading: string,
  description: string,
  persons: any,
};

export default class HomePage extends React.Component<{}, HomePageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Home',
      heading: 'Top 5 GitHub Users',
      description: 'Tap the username to see more information',
      persons: ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']
    };
  }

  render() {
    const badgeStyle = {
      margin: '3px 5px',
    };

    return (
      <React.Fragment>
        <Header title={this.state.title} backLink="" />
        <Container maxWidth="lg">
          <h1>{this.state.heading}</h1>
          <p>{this.state.description}</p>
          <Box>
          {this.state.persons.map((person: string, index: number) => (
            <Link key={person} to={`/person/${person}`} style={badgeStyle}>
              <Button variant="contained" color="primary">
                {person}
              </Button>
            </Link>
          ))}
          </Box>
        </Container>
      </React.Fragment>
    );
  };
};
