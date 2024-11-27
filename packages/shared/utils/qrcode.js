const QRCode = require('qrcode');

const generateQRCode = async (text) => {
    try {
        return await QRCode.toDataURL(text);
    } catch (error) {
        console.error("Error al generar el código QR:", error);
        throw error;
    }
};

module.exports = {
    generateQRCode,
};