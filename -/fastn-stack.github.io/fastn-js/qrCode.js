function qrCodeGenerate(id, url) {
    id = fastn_utils.getStaticValue(id);
    url = fastn_utils.getStaticValue(url);
    new QRCode(document.getElementById(id), url);
}



function qrCodeGenerateWithConfig(id, url, width, height, color, bgColor) {
    id = fastn_utils.getStaticValue(id);
    url = fastn_utils.getStaticValue(url);
    width = fastn_utils.getStaticValue(width);
    height = fastn_utils.getStaticValue(height);
    color = fastn_utils.getStaticValue(color);
    bgColor = fastn_utils.getStaticValue(bgColor);

    new QRCode(document.getElementById(id), {
        text: url,
        width: width ?? 256,
        height: height ?? 256 ,
        colorDark : color ?? "#000",
        colorLight : bgColor ?? "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}
