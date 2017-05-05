'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: './phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone: any) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl: any) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
