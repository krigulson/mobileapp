import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('loans', function() {
    this.route('show');
    this.route('previous');
  });
  this.route('forgot');
  this.route('home');
});

export default Router;
