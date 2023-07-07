function download_as_image(element_id, filename) {
    // Get the HTML element you want to convert to an image
    var element = document.getElementById(element_id);

    // Use htmlToImage library to convert the element to an image
    htmlToImage.toPng(element)
      .then(function (dataUrl) {
        // `dataUrl` contains the image data in base64 format
        var link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('Error downloading image:', error);
      });
}
