function reader(file, type) {
  if (!(file instanceof Blob)) {
    throw new TypeError('Invalid data type, must be a File or Blob')
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result || undefined)
    }

    reader.onerror = () => {
      reject(reader.error)
    }

    reader[`readAs${type}`](file)
  })
}

export function readAsArrayBuffer(file) {
  return reader(file, 'ArrayBuffer')
}

export function readAsText(file) {
  return reader(file, 'Text')
}

export function readAsDataURL(file) {
  return reader(file, 'DataURL')
}

export function readAsBinaryString(file) {
  return reader(file, 'BinaryString')
}
