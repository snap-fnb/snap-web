import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('appointment-confirmation', 'Integration | Component | appointment confirmation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{appointment-confirmation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#appointment-confirmation}}
      template block text
    {{/appointment-confirmation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
