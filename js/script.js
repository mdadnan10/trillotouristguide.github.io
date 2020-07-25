    /*-----side nav js--------*/

    function openNav() {
      document.getElementById("sidenav").style.width = "180px";
    }

    function closeNav() {
      document.getElementById("sidenav").style.width = "0";
    }

    /*-----international read more button js-----*/
    var i = 0;

    function read() {
      if (!i) {
        document.getElementById("more").style.display = "inline";
        document.getElementById("dots").style.display = "none";
        document.getElementById("read").innerHTML = "Read less";
        i = 1;
      } else {
        document.getElementById("more").style.display = "none";
        document.getElementById("dots").style.display = "inline";
        document.getElementById("read").innerHTML = "Read more";
        i = 0;
      }
    }


    /*-----india read more button js-----*/
    var i = 0;

    function indianread() {
      if (!i) {
        document.getElementById("indianmore").style.display = "inline";
        document.getElementById("indiandots").style.display = "none";
        document.getElementById("indianread").innerHTML = "Read less";
        i = 1;
      } else {
        document.getElementById("indianmore").style.display = "none";
        document.getElementById("indiandots").style.display = "inline";
        document.getElementById("indianread").innerHTML = "Read more";
        i = 0;
      }
    }