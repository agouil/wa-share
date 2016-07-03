# wa-share
A simple implementation of WhatsApp sharing button

## Installation
1. Copy the ```src``` directory to your website static files directory.
2. Add this to the ```<head>``` element of the page:
```html
<script type="text/javascript" src="src/js/wa-share.js"></script>
```
3. Add this inside the ```<body>``` element of the page:
```html
<div id="<element-id>"></div>
<script type="text/javascript">
    WABTN.share({
        id: "<element-id>",
        text: "<text-to-share>"
    });
</script>
```

## Issues
To submit any issues, raise an issue through the [Issues Page](https://github.com/agouil/wa-share/issues)

## License
MIT