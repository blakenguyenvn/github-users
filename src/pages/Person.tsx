import * as React from 'react';
import { Container, Box, Card, CardHeader, Avatar } from '@material-ui/core';
import { Header } from '@/components/Header';

interface PersonPageState {
  title: string,
  personName: string,
  person: any
};

export default class PersonPage extends React.Component<{}, PersonPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Person',
      personName: props.match.params.personName,
      person: {
        name: '',
        avatar_url: '',
        location: ''
      }
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response =
      await fetch(`https://api.github.com/users/${this.state.personName}`,
        { headers: {'Content-Type': 'application/json'}}
      );

    this.setState({
      ...this.state,
      person: await response.json(),
    });
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.person !== nextState.person;
  }

  render() {
    const isLoadedPerson = this.state.person !== null;
    return (
      <React.Fragment>
        <Header title={this.state.title} backLink={'/'} />
        <Container maxWidth="lg">
          <Box>
            <Card>
              <CardHeader
                avatar={
                  <Avatar alt={this.state.person.name} src={this.state.person.avatar_url} />
                }
                title={this.state.person.name}
                subheader={this.state.person.location}
              />
            </Card>
          </Box>
        </Container>
      </React.Fragment>
    );
  };
};
