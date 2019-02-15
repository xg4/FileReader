type FileType = 'ArrayBuffer' | 'Text' | 'DataURL' | 'BinaryString'

type ReaderMethod =
  | 'readAsArrayBuffer'
  | 'readAsText'
  | 'readAsDataURL'
  | 'readAsBinaryString'

function reader(file: Blob, type: FileType) {
  if (!(file instanceof Blob)) {
    throw new TypeError("Invalid data type, parameter 1 is not of type 'Blob'")
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result || undefined)
    }

    reader.onerror = () => {
      reject(reader.error)
    }

    const method = `readAs${type}` as ReaderMethod

    reader[method](file)
  })
}

export function readAsArrayBuffer(file: Blob) {
  return reader(file, 'ArrayBuffer')
}

export function readAsText(file: Blob) {
  return reader(file, 'Text')
}

export function readAsDataURL(file: Blob) {
  return reader(file, 'DataURL')
}

export function readAsBinaryString(file: Blob) {
  return reader(file, 'BinaryString')
}
