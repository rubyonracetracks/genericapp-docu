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

class About extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>About</h1>
            </header>
            
            <h2>How Does Generic App Work?</h2>
            Generic App is a Ruby gem that asks you for the desired name of your new app and the email address you wish to use in your app and then gives you a prebuilt app built around this information.  This prebuilt app not only passes all tests but is also compliant with RuboCop and Rails Best Practices.
            
            <h2>Where Does the Prebuilt Rails App Come From?</h2>
            I use my <a href="https://www.railsneutrino.com/">Rails Neutrino</a> tool to create the app, and then I update the source code in the Generic App gem to use this new template app instead of the old one as the basis for the output app.
            
            <h2>Why Use Generic App instead of Rails Neutrino?</h2>
            The template app used by Generic App may be a few weeks to a few months old, but you can count on it to pass all tests and comply with RuboCop and Rails Best Practices.  In contrast, the Rails Neutrino repository requires occasional updates to ensure such perfect compliance, because Ruby on Rails, RuboCop and Rails Best Practices change.
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = About;
