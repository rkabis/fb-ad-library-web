import { ExportToCsv } from 'export-to-csv'


const saveToCsv = async (data: any) => {
  const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'FB Ad Library',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true
  }

  const csvExporter = new ExportToCsv(options)

  csvExporter.generateCsv(data)
}

export default saveToCsv