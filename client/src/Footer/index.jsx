import React from 'react';
import {
  Footer, Content, Container, Columns, Column, Icon,
} from 'bloomer';

export default () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Made with
              <Icon hasTextColor="danger" className="fa fa-heart" />
              by
              <a>Algus Dark</a>
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
          <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
        </Content>
      </Content>
    </Container>
  </Footer>
);
