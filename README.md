# smoothScroll
Scrolls the page smoothly when selecting an anchor tag.

## Options

No options are required.

|     Option     |   Type  | Default | Description |
|----------------|---------|---------|-------------|
|    distance    | Integer |    0    | Optionally set a fixed point to scroll to on the page.\* |
|       top      | Integer |    0    | Sets a padding to add to the scroll, useful for fixed headers. |
| scrollExternal | Boolean |  false  | Optionally allow links on new pages to scroll to their location rather than simply load. |

*\* In order to set the scroll to the top, use -1 as 0 will evaluate to false.*

## Examples:

### Basic usage / Apply to all anchor tags

HTML / Javascript

    <script type="text/javascript" src="path/to/smoothscroll.js"></script>
  
    <script type="text/javascript">
    $(document).ready(function(){
      $('a[href^="#"]:not([href="#"])').smoothScroll();
    });
    </script>
    
### Add a padding top

For when there is a fixed header.

    $('a.scroll').smoothScroll({
        top: 50
    });
    
### Using options

    $('a[href^="#"]:not([href="#"])').smoothScroll({
      distance: 100,
      top: 50,
      scrollExternal: true
    });

## Other information

Requires jQuery to be included.
