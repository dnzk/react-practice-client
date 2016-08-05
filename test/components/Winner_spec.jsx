import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';
import Winner from '../../src/components/Winner';
import {expect} from 'chai';

describe('Winner', () => {
  it('renders a div with class \'winner\'', () => {
    const component = renderIntoDocument(
      <Winner winner="Trainspotting" />
    );
    const rendered = scryRenderedDOMComponentsWithTag(component, 'div');
    expect(rendered.length).to.equal(1);

    const renderedClass = scryRenderedDOMComponentsWithClass(component, 'winner');
    expect(renderedClass.length).to.equal(1);
  });
});
