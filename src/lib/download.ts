export class DownloadUtils {
  /**
   * Downloads a file with the specified data as a Blob.
   * @param {any} data - The data to be downloaded as a Blob.
   * @param {string} filename - The name of the file to be saved as.
   * @param {string} contentType - The MIME type or content type of the file.
   */
  static file = (data: any, filename: string, contentType: string) => {
    // Create a Blob from the provided data with the specified content type.
    const blob = new Blob([data], { type: contentType })

    // Create an invisible HTML anchor element to trigger the download.
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style.display = 'none'

    // Generate a URL for the Blob data
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = filename.replace(/"/g, '')

    // Trigger the download
    a.click()

    // Revoke the Blob URL to free up resources
    window.URL.revokeObjectURL(url)

    // Remove the anchor element from the DOM
    a.remove()
  }

  /**
   * Downloads a file with the specified data as a Blob.
   * @param {any} data - The data to be downloaded as a Blob.
   * @param {string} filename - The name of the file to be saved as.
   * @param {string} contentType - The MIME type or content type of the file.
   */
  static json = (data: any, filename: string, contentType = 'application/json') => {
    // Create a Blob from the provided data with the specified content type.
    const blob = new Blob([data], { type: contentType })

    // Create an invisible HTML anchor element to trigger the download.
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style.display = 'none'

    // Generate a URL for the Blob data
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = filename.replace(/"/g, '')

    // Trigger the download
    a.click()

    // Revoke the Blob URL to free up resources
    window.URL.revokeObjectURL(url)

    // Remove the anchor element from the DOM
    a.remove()
  }

  /**
   * Downloads a CSV file with the specified content as a data URL.
   * @param {any} csv - The CSV content to be downloaded.
   * @param {string} fileName - The name of the file to be saved as.
   */
  static csv = (csv: any, fileName: string) => {
    // Create an invisible HTML anchor element to trigger the download.
    const hiddenElement = document.createElement('a')

    // Set the anchor's attributes for the download
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
    hiddenElement.target = '_blank'
    hiddenElement.download = fileName.replace(/"/g, '')

    // Trigger the download
    hiddenElement.click()

    // Remove the anchor element from the DOM
    hiddenElement.remove()
  }

  /**
   * Downloads a ZIP file with the specified data as a Blob.
   * @param {any} data - The data to be downloaded as a ZIP file (Blob).
   * @param {string} filename - The name of the ZIP file to be saved as.
   */
  static zip = (data: any, filename: string) => {
    // Create a Blob from the provided data with the 'application/zip' MIME type.
    const blob = new Blob([data], { type: 'application/zip' })

    // Create an invisible HTML anchor element to trigger the download.
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style.display = 'none'

    // Generate a URL for the Blob data
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = filename.replace(/"/g, '')

    // Trigger the download
    a.click()

    // Revoke the Blob URL to free up resources
    window.URL.revokeObjectURL(url)

    // Remove the anchor element from the DOM
    a.remove()
  }

  /**
   * Downloads a PDF file with the specified data as a Blob.
   * @param {any} data - The data to be downloaded as a PDF (Blob).
   * @param {string} filename - The name of the PDF file to be saved as.
   */
  static pdf = (data: any, filename: string) => {
    // Create a Blob from the provided data with the 'application/pdf' MIME type.
    const blob = new Blob([data], { type: 'application/pdf' })

    // Create an invisible HTML anchor element to trigger the download.
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style.display = 'none'

    // Generate a URL for the Blob data
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = filename.replace(/"/g, '')

    // Trigger the download
    a.click()

    // Revoke the Blob URL to free up resources
    window.URL.revokeObjectURL(url)

    // Remove the anchor element from the DOM
    a.remove()
  }
}
