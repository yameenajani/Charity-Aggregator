import './main.html';


import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
 
// ...some lines skipped...
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
 
    // Clear form

    $('#experience-timeline').each(function() {

      $this = $(this); // Store reference to this
      $userContent = $this.children('div'); // user content

      // Create each timeline block
      $userContent.each(function() {
          $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
      });

      // Add icons to each block
      $this.find('.vtimeline-point').each(function() {
          $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
      });

      // Add dates to the timeline if exists
      $this.find('.vtimeline-content').each(function() {
          var date = $(this).data('date');
          if (date) { // Prepend if exists
              $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
          }
      });

  });

  