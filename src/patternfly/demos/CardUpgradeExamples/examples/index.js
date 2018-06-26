import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import CardupgradeexamplesExample1 from './card-upgrade-examples-example1.hbs';
import CardupgradeexamplesExample2 from './card-upgrade-examples-example2.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const cardUpgradeExamplesExample1 = CardupgradeexamplesExample1();
  const cardUpgradeExamplesExample2 = CardupgradeexamplesExample2();

  return (
    <Documentation docs={Docs}>
      <Example heading="PatternFly 3 Cards">
        {cardUpgradeExamplesExample1}
      </Example>
      <Example heading="PatternFly 4 Cards">
        {cardUpgradeExamplesExample2}
      </Example>
    </Documentation>
  );
};
