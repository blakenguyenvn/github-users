import * as React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Header } from '../components/Header';
import * as NotFoundStyle from '../assets/styles/components/NotFound.scss';

interface NotFoundState {
   title: string,
   heading: string,
   description: string
};

export default class NotFoundPage extends React.Component<{}, NotFoundState> {
  constructor(props: any) {
		super(props);

    this.state = {
      title: 'Page not found',
      heading: 'Welcome to BetterComp!',
      description: `Your page was not found. Click here for back to App.`
    };
	};

  render() {
    return (
      <React.Fragment>
        <Header title={this.state.title} backLink="" />
        <Container maxWidth="lg">
          <div className={NotFoundStyle.card}>
            <h1 className={NotFoundStyle.heading}>
              {this.state.heading}
            </h1>
            <p className={NotFoundStyle.description}>
              {this.state.description}
            </p>
            <div>
              <Button variant="contained" color="secondary">
                Go To App
              </Button>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
};
