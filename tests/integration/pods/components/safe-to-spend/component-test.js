import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('safe-to-spend', 'Integration | Component | safe to spend', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{safe-to-spend}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#safe-to-spend}}
      template block text
    {{/safe-to-spend}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
