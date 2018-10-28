const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express();

const sendPuzzle = (puzzle) => (req, res) => {
  fs.createReadStream(path.join(__dirname, 'puzzles', puzzle, 'index.html')).pipe(res);
}

var _0x7b1a = ["\x2F\x31", "\x31", "\x67\x65\x74", "\x2F\x74\x77\x6F", "\x32", "\x2F\x77\x61\x79\x6F\x75\x74", "\x33", "\x2F\x6E\x6F\x74\x61\x70\x72\x69\x6D\x65", "\x34", "\x2F\x34\x34\x31", "\x35", "\x2F\x70\x61\x6E\x67\x6F\x6C\x69\x6E", "\x36", "\x2F\x77\x72\x6F\x6E\x67\x70\x69", "\x37", "\x2F\x6E\x6F\x74\x5F\x61\x5F\x6C\x69\x65", "\x38", "\x2F\x6F\x62\x76\x69\x6F\x75\x73", "\x39", "\x2F\x62\x72\x75\x74\x65\x66\x6F\x72\x63\x65", "\x31\x30", "\x2F\x74\x68\x61\x74\x5F\x77\x61\x73\x5F\x61\x5F\x63\x6F\x64\x65", "\x65\x6E\x64"]; app[_0x7b1a[2]](_0x7b1a[0], sendPuzzle(_0x7b1a[1])); app[_0x7b1a[2]](_0x7b1a[3], sendPuzzle(_0x7b1a[4])); app[_0x7b1a[2]](_0x7b1a[5], sendPuzzle(_0x7b1a[6])); app[_0x7b1a[2]](_0x7b1a[7], sendPuzzle(_0x7b1a[8])); app[_0x7b1a[2]](_0x7b1a[9], sendPuzzle(_0x7b1a[10])); app[_0x7b1a[2]](_0x7b1a[11], sendPuzzle(_0x7b1a[12])); app[_0x7b1a[2]](_0x7b1a[13], sendPuzzle(_0x7b1a[14])); app[_0x7b1a[2]](_0x7b1a[15], sendPuzzle(_0x7b1a[16])); app[_0x7b1a[2]](_0x7b1a[17], sendPuzzle(_0x7b1a[18])); app[_0x7b1a[2]](_0x7b1a[19], sendPuzzle(_0x7b1a[20])); app[_0x7b1a[2]](_0x7b1a[21], sendPuzzle(_0x7b1a[22]))

app.use(express.static('./public'))

app.listen(8080, function () {
  console.log('the app is running in :8080')
})