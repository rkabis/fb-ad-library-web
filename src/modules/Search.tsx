import React, { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'

import Table from '../components/Table'
import queryAdLibrary from '../utils/queryAdLibrary'
import useDebounce from '../utils/useDebounce'
import saveToCsv from '../utils/saveToCsv'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%'
  },
  search: {
    margin: theme.spacing(3)
  },
  table: {
    marginTop: theme.spacing(1)
  }
}))

interface Props {
  searchKey?: string;
}

const Search = (props: Props): ReactElement => {
  const [query, setQuery] = React.useState('')
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const debouncedQuery = useDebounce(query, 1000)

  const classes = useStyles()

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  React.useEffect(()=>{
    async function fetchData() {
      if (query != '' && query.length >= 3) {
        setLoading(true)
        const res = await queryAdLibrary(query)

        setData(res)
        setLoading(false)
      } else {
        setData([])
      }
    }

    fetchData()
  },[debouncedQuery])

  return (
    <div className={classes.root}>
      <TextField
        label="Search"
        value={query}
        onChange={handleChangeQuery}
        variant="outlined"
        className={classes.search}
        InputProps={loading && {
          endAdornment: <InputAdornment position="end"><CircularProgress/></InputAdornment>
        }}
      />
      {
        data.length > 0 && (
          <Button onClick={() => saveToCsv(data)}>
            {'Download'}
          </Button>
        )
      }
      {
        data.length > 0 && <Table data={data} />
      }
    </div>
  )
}

export default Search