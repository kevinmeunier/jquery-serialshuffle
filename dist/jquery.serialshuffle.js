/*!
 * jQuery serialshuffle
 * https://github.com/kevinmeunier/jquery-serialshuffle
 *
 * Copyright 2022 Meunier Kévin
 * https://www.meunierkevin.com
 *
 * Released under the MIT license
 */
(function($){
  'use strict';

  // Removing a element in an array based on the value
  Array.prototype.remove = function(){
    var what, a = arguments, L = a.length, ax;
    while (L && this.length){
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1){
        this.splice(ax, 1);
      }
    }
    return this;
  };

  $.fn.serialshuffle = function(options){
    const settings = $.extend({}, $.fn.serialshuffle.defaults, options);
    const base = this;
    let lastrandom;
    let random;

    $.extend(this, {
      init: function(){
        // Browsing the available lists
        this.each(function(){
          const $list = $(this);
          let data = {
            max: $list.children().length,
            lastrandom: undefined,
            arrBefore: settings.shuffle,
            arrCurrent: [],
            arrAfter: []
          };

          // Storage of the currently displayed images
          $list.find('img').each(function(){
            const filename = base.getFilename($(this));
            data.arrCurrent.push(filename);
          });

          // Initialisation
          setInterval(function(){
            base.shuffle($list, data);
          }, settings.speed);
        });
      },

      random: function(data){
        while (random === data.lastrandom){
          random = Math.floor(Math.random() * data.max);
        }

        data.lastrandom = random;
        return random;
      },

      shuffle: function($list, data){
        // Restarting the loop
        if( !data.arrBefore.length ){
          data.arrBefore = data.arrAfter;
          data.arrAfter = [];
        }

        // Setup
        var randIndex = base.random(data);
        var $target = $list.children().eq(randIndex);
        var prevFilename = base.getFilename($target.find('img'));
        var nextFilename = data.arrBefore[Math.floor(Math.random() * data.arrBefore.length)];

        // Hide the previous logo
        $target.find('img').fadeOut(1000, function(){
          $(this).remove();
        });

        // Show the new log
        $('<span class="sub-animate"><img src="'+ settings.folder + nextFilename +'" alt=""></span>')
          .appendTo($target)
          .animate({ opacity: 1 }, 1000, function(){
            $(this).children().unwrap();
          });

        // Reinitialisation
        data.arrBefore.remove(nextFilename);
        data.arrCurrent.remove(prevFilename);
        data.arrCurrent.push(nextFilename);
        data.arrAfter.push(prevFilename);
      },

      getFilename: function($element){
        return $element.attr('src').replace(/^.*[\\\/]/, '');
      }
    });

    this.init();
    return this;
  };

  $.fn.serialshuffle.defaults = {
    folder: '',
    stack: [],
    speed: 2000
  };
})(jQuery);
