# wa-share
A simple implementation of WhatsApp sharing button. The code creates an image button. It can be configured to create button (w/o an image) or label instead.

## Installation
1. Copy the ```src/js``` directory to your website static files directory.
2. Add this to the ```<head>``` element of the page:
```html
<script type="text/javascript" src="js/wa-share.js"></script>
```
3. Add this inside the ```<body>``` element of the page:
```html
<div id="<element-id>"></div>
<script type="text/javascript">
    WABTN.share({
        id: "<element-id>",
        text: "<text-to-share>",
        size: "<sm | md | lg>"
    });
</script>
```

## Issues
To submit any issues, raise an issue through the [Issues Page](https://github.com/agouil/wa-share/issues)

## License
MIT