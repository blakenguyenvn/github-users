import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

interface HeaderProps {
   title: string,
   backLink: string
};

export class Header extends React.Component<HeaderProps, {}> {
  constructor(props: any) {
		super(props);
	};

  render() {
    return (
      <header className="header">
        <span className="back-link">
          { this.props.backLink &&
              <Link to={this.props.backLink}>
                Back
              </Link>
          }
        </span>
        <Typography className="page-title" variant="h6" noWrap>
            {this.props.title}
        </Typography>
      </header>
    );
  }
};
