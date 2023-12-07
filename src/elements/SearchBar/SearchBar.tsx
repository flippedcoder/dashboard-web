import { FormControl, Input, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
  name: string
}

const SearchBar = (props: SearchBarProps) => {
  const inputProps = {
    minLength: 3,
  }

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <FormControl variant="standard">
      <Input
        id={props.name}
        inputProps={inputProps}
        name={props.name}
        onChange={(e) => handleSearch(e)}
        placeholder={`Search ${props.name}...`}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        type="search"
      />
    </FormControl>
  )
}

export default SearchBar
