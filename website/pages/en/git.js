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

class Git extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Git</h1>
            </header>
            
            <ul>
              <li>Generic App Gem Source Code: <a href="https://bitbucket.org/rubyonracetracks/generic_app/src/master/">https://bitbucket.org/rubyonracetracks/generic_app/src/master/</a></li>
              <li>This site's source code: <a href="https://github.com/rubyonracetracks/genericapp-docu">https://github.com/rubyonracetracks/genericapp-docu</a></li>
            </ul>
            
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Git;
