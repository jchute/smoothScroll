# smoothScroll
Scrolls the page smoothly when selecting an anchor tag.

## Options

No options are required.

| Option  |  Type   | Default | Description |
|---------|---------|---------|-------------|
| scrollTo| Integer |   ''    | Optionally set a fixed point to scroll to on the page. |
|  top    | Integer |    0    | Sets a padding to add to the scroll, useful for fixed headers. |

## Examples:

### Basic usage / Apply to all anchor tags

HTML / Javascript

    <script type="text/javascript" src="path/to/smoothscroll.js"></script>
  
    <script type="text/javascript">
    $(document).ready(function(){
      $('a[href*="#"]:not([href="#"])').smoothScroll();
    });
    </script>
    
### Add a padding top

For when there is a fixed header.

    $('a.scroll').smoothScroll({
        top: 50
    });
    
### Using options

    $('.yourDiv').parallax({
      scrollTo: 100,
      top: 50
    });

## Other information

Requires jQuery to be included.
