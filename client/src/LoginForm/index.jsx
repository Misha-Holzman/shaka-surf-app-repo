import React     from 'react';
import PropTypes from 'prop-types';
import {
  Field, Control, Input, Button, Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Box,
  Title,
  Subtitle,
} from 'bloomer';


export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:    '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // as found in the docs
  // @see https://reactjs.org/docs/forms.html#handling-multiple-inputs
  handleChange(evt) {
    // destructure the event
    const { name, value } = evt.target;

    // set the state as needed
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const { submitAction } = this.props;
    const { email, password } = this.state;
    await submitAction({ email, password });

    // reset the form
    this.setState({
      email:    '',
      password: '',
    });
  }

  render() {
    const { buttonText, size, isGrouped } = this.props;
    const { email, password } = this.state;
    return (
      <Hero isColor="light" isFullHeight style={{ 'margin-top': '-60px'}}>
        <HeroBody>
          <Container hasTextAlign="centered">
            <Columns>
              <Column isSize={4} isOffset={4}>
                <Box>
                  <Title>Hiya!</Title>
                  <Subtitle>Let’s Get You logged in...</Subtitle>
                  <form onSubmit={this.handleSubmit}>
                    <Field>
                      <Control>
                        <Input
                          name="email"
                          isSize={size}
                          onChange={this.handleChange}
                          placeholder="Email"
                          value={email}
                        />
                      </Control>
                    </Field>
                    <Field>
                      <Control isExpanded>
                        <Input
                          name="password"
                          isSize={size}
                          onChange={this.handleChange}
                          type="password"
                          placeholder="password"
                          value={password}
                        />
                      </Control>
                    </Field>
                    <Field>
                      <Control>
                        <Button
                          type="submit"
                          isSize={size}
                          isColor="info"
                          isBlock
                          isFullWidth
                        >
                          { buttonText }
                        </Button>
                      </Control>
                    </Field>
                  </form>
                </Box>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    );
  }
}

TaskForm.propTypes = {
  submitAction: PropTypes.func.isRequired,
  buttonText:   PropTypes.string,
  size:         PropTypes.string,
};

TaskForm.defaultProps = {
  size:       'large',
  buttonText: 'Log In',
};
