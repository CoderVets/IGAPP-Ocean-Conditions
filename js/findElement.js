export default function findElement(arr, propValue) {
  for (var key in arr) {
    if (key == propValue)
      return arr[key];
    }
}