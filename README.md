# jQuery serialshuffle - Lightweight randomised logo animation

## About jQuery serialshuffle
Large companies usually show a grid of logos, however, the choice of the logos might be subject to discussion. This plugin will show many logos randomnly based on a grid (6, 9, 12, etc.). Only the first set of logos will be loaded on page load, the rest will be added in JavaScript to avoid any useless HTTP requests. Note that jQuery serialshuffle is shared for inspirational and development purpose.


## Demonstration
See the [project page](https://github.meunierkevin.com/jquery-serialshuffle/) for a demonstration.


## Compatibility
jQuery serialshuffle has been tested in: IE, Edge, Chrome (mobile included), Firefox (mobile included), and Safari (mobile included).


## Self-Hosted
[Download](https://github.com/kevinmeunier/jquery-serialshuffle/archive/master.zip) and save one of two available files to include serialshuffle to your page, either the [development](https://github.com/kevinmeunier/jquery-serialshuffle/blob/main/dist/jquery.serialshuffle.js) or the [minified](https://github.com/kevinmeunier/jquery-serialshuffle/blob/main/dist/jquery.serialshuffle.min.js) version. Also, you can visit the [project page](https://github.meunierkevin.com/jquery-serialshuffle/) to copy what you need.
```HTML
<script src="jquery.serialshuffle.min.js"></script>
<link href="jquery.serialshuffle.css" rel="stylesheet">
```
Due to the lightweight CSS code, it's recommended to copy/paste the CSS code into your general stylesheet.

Make sure [jQuery](http://jquery.com) is properly loaded before using jQuery serialshuffle. 


## Basic Usage
The basic usage of serialshuffle is pretty easy, just start using jQuery serialshuffle by calling it after page load.
```HTML
<ul class="js-serialshuffle">
  <li><img src="logo-amazon.svg" alt=""></li>
  <li><img src="logo-cisco.svg" alt=""></li>
  <li><img src="logo-cocacola.svg" alt=""></li>
  <li><img src="logo-coinbase.svg" alt=""></li>
  <li><img src="logo-facebook.svg" alt=""></li>
  <li><img src="logo-fossil.svg" alt=""></li>
  <li><img src="logo-google.svg" alt=""></li>
  <li><img src="logo-huawei.svg" alt=""></li>
  <li><img src="logo-oppo.svg" alt=""></li>
  <li><img src="logo-sandisk.svg" alt=""></li>
  <li><img src="logo-slack.svg" alt=""></li>
  <li><img src="logo-sony.svg" alt=""></li>
</ul>
```
```JS
$(document).ready(function(){
  // jquery.serialshuffle initialisation
  $('.js-serialshuffle').serialshuffle({
    folder: 'https://github.meunierkevin.com/assets/img/serialshuffle/',
    shuffle: [
      'logo-stripe.svg',
      'logo-tmobile.svg',
      'logo-toyota.svg',
      'logo-uber.svg',
      'logo-ups.svg',
      'logo-vware.svg',
      'logo-westerndigital.svg'
    ]
  });
});
```

  
## Configuration Parameters
The following configurations is available by default:

Name               | Type       | Default                             | Description
------------------ | ---------- | ----------------------------------- | -----------
folder             | *string*   | *''*                                | The root folder for the images
stack              | *string*   | *'[]'*                              | An array of additional images (Mandatory)
speed              | *integer*  | *'2000'*                            | The delay between the displayed logo and the new one


## Bugs / Feature request
Please [report](http://github.com/kevinmeunier/jquery-serialshuffle/issues) bugs and feel free to [ask](http://github.com/kevinmeunier/jquery-serialshuffle/issues) for new features directly on GitHub.


## License
jQuery serialshuffle is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.
