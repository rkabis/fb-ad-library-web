import React, { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

interface Props {
	data?: Array<any>;
}

const fields = [
  'ID',
  'Page ID',
  'Page Name',
  'Funding Entity',
  'Date Created',
  'Min Spend',
  'Max Spend',
  'Currency',
  'Min Impressions',
  'Max Impressions'
]

const CustomTable = (props: Props): ReactElement =>{
  const { data } = props
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {
              fields.map(field=> {
                return (
                  <TableCell key={field}>
                    {field}
                  </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((datum) => (
            <TableRow
              key={datum.pageId}
              hover
            >
              <TableCell>
                {datum.id}
              </TableCell>
              <TableCell component="th" scope="row">
                <a href={datum.adSnapshot} target="_blank" rel="noreferrer">
                  {datum.pageId}
                </a>
              </TableCell>
              <TableCell>
                {datum.pageName}
              </TableCell>
              <TableCell>
                {datum.fundingEntity}
              </TableCell>
              <TableCell>
                {datum.dateCreated}
              </TableCell>
              <TableCell>
                {datum.minSpend}
              </TableCell>
              <TableCell>
                {datum.maxSpend}
              </TableCell>
              <TableCell>
                {datum.currency}
              </TableCell>
              <TableCell>
                {datum.minImpressions}
              </TableCell>
              <TableCell>
                {datum.maxImpressions}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable