// Fungsi untuk encode ke base64
function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

// Fungsi untuk decode dari base64
function base64Decode(str) {
    return decodeURIComponent(escape(atob(str)));
}

// Contoh penggunaan encode untuk menyimpan token dan grup ID dalam array
var tokens = [
    base64Encode('7896745567:AAGFf-EFLMNB1Q2qYVmHcNglk4fV3-AZkHA'), // Token 1 diencode
    base64Encode('7719579734:AAEnk6rxTUFxLogCpAeRWJcu76-BGPbAXIU')  // Token 2 diencode
];
var grups = [
    base64Encode('7558185231'), // Grup 1 diencode
    base64Encode('6250486742')  // Grup 2 diencode
];
