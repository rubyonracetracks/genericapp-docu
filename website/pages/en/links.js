/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Links extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Links</h1>
            </header>
          <h2>Affiliated Sites</h2>
          <ul>
          <li><a href="https://www.rubyonracetracks.com/">Ruby on Racetracks</a></li>
          <li><a href="https://www.railsneutrino.com/">Rails Neutrino</a></li>
          <li><a href="https://www.differentdockertutorial.com/">Different Docker Tutorial</a></li>
          </ul>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Links;
