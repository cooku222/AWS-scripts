var token = "****";
var url = "https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_****/container/object";
var request = new XMLHttpRequest();
request.onreadystatechange = function (oEvent) {
  if (request.readyState == 4) {
      result = 'Status: ' + request.status;
      result = result + '\n' + request.getAllResponseHeaders();
      console.log(result)
  }
}
request.open('GET', url);
request.setRequestHeader('X-Auth-Token', token);
request.send(null);
