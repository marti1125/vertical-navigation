Vertical Navigation v0.1
-----------------


> jQuery Plugin

> the demo uses Bootstrap

> Inspiration https://codyhouse.co/gem/vertical-fixed-navigation/

Dependencie
------------


- [jQuery](http://jquery.com/download/)

Use
----


      <div id="menu">
        <ul>
          <li>
            <a href="#section1" class="item_menu">
              <img src="./img/1b.png" alt="1">
            </a>
          </li>
          <li>
            <a href="#section2" class="item_menu">
              <img src="./img/2.png" alt="2">
            </a>
          </li>
          <li>
            <a href="#section3" class="item_menu">
              <img src="./img/3.png" alt="3">
            </a>
          </li>
          <li>
            <a href="#section4" class="item_menu">
              <img src="./img/4.png" alt="4">
            </a>
          </li>
        </ul>
      </div>


      <script>
        $("#menu").vm_img({
          path_img: "./img/"
        });
      </script>


License
-------

Copyright (c) 2015 Willy Aguirre

Licensed under the MIT License
