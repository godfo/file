/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://raw.githubusercontent.com/HelSingV/file/master/Scripts/Surge/YouTube.js
[MITM]
hostname = *.googlevideo.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "multipart/byteranges"
  }
};
$done({response: data});
