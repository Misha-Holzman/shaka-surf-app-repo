import React from "react";
import PropTypes from "prop-types";
import {
  Field,
  Control,
  Input,
  Button,
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Box,
  Title,
  Subtitle
} from "bloomer";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
      [name]: value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const { submitAction } = this.props;
    const { email, password } = this.state;
    await submitAction({ email, password });

    // reset the form
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    const { buttonText, size } = this.props;
    const { email, password } = this.state;
    return (
      // <Hero
      //   isColor="light"
      //   isFullHeight
      //   style={{ marginTop: "10px", color: "white", marginRight: "30px" }}
      // >
        <HeroBody style={{ width: "100%", padding: "8px 0px 8px 0px"}}>
          <Container hasTextAlign="centered" style={{ width: "100%" }}>
            <Columns>
              <Column isSize={12} isOffset={0}>
                <Box>
                  {/*
                  <Title
                    style={{
                      color: "black",
                      borderRadius: "20px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      padding: "5px"
                    }}
                  >
                    Log in to your accout:
                  </Title>
                  */}

                  <form onSubmit={this.handleSubmit}>
                    <Field>
                      <Control>
                        <Input
                          style={{ border: "solid black 1px" }}
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
                          style={{
                            border: "solid black 1px",
                            marginTop: "4px"
                          }}
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
                          style={{
                            marginTop: "15px",
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            border: "solid black 1px",
                            borderRadius: "100px",
                            color: "black",
                            fontSize: "15px"
                          }}
                          type="submit"
                          isSize={size}
                          isColor="info"
                          isBlock
                          isFullWidth
                        >
                          {buttonText}
                        </Button>
                      </Control>
                    </Field>
                  </form>
                </Box>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      // </Hero>
    );
  }
}

Form.propTypes = {
  submitAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  size: PropTypes.string
};

Form.defaultProps = {
  size: "small",
  buttonText: "Log In"
};
