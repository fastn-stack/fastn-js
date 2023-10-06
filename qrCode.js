function qrCodeGenerate(id, url) {
    id = fastn_utils.getStaticValue(id);
    url = fastn_utils.getStaticValue(url);
    new QRCode(document.getElementById(id), url);
}
