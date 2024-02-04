import { Input, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'

interface SearchBarProps {
  name: string
  onSubmitSearch: (searchText: string) => void
}

const FullWidthForm = styled.form`
  width: 450px;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const SearchBar = (props: SearchBarProps) => {
  const { onSubmitSearch } = props

  const searchFieldInputProps = {
    maxLength: 15,
    minLength: 3,
    required: true,
  }

  return (
    <Form
      onSubmit={onSubmitSearch}
      render={({ handleSubmit }) => (
        <FullWidthForm
          aria-label={`${props.name}-search-form`}
          onSubmit={handleSubmit}
        >
          <Field
            name="search"
            render={({ input }) => (
              <Input
                aria-label={`${props.name}-search-input`}
                id={`${props.name}Search`}
                placeholder={`Search ${props.name}...`}
                type="search"
                fullWidth
                inputProps={searchFieldInputProps}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                {...input}
              />
            )}
          />
        </FullWidthForm>
      )}
    />
  )
}

export default SearchBar
