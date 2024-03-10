import { Input, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'

export interface SearchBarProps {
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
  }

  return (
    <Form
      onSubmit={onSubmitSearch}
      validate={(values) => {
        const errors: { search: string } = { search: '' }
        if (!values.search) {
          errors.search = 'Need a search term'
        }
        return errors
      }}
      render={({ handleSubmit }) => (
        <FullWidthForm
          aria-label={`${props.name}-search-form`}
          onSubmit={handleSubmit}
        >
          <Field
            name="search"
            render={({ input, meta }) => (
              <>
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
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </>
            )}
          />
        </FullWidthForm>
      )}
    />
  )
}

export default SearchBar
