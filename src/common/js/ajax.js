export function ajax (method, url, cb, data) {
  let xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status)
      if (xhr.status === 200) {
        cb(xhr.responseText)
      }
    }
  }
  xhr.send(JSON.stringify(data))
}
