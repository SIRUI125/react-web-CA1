import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

// Function to handle page changes.
    const AddPagination = ({setPage, numOfPages = 500, paginate}) =>{
    const handlePageChange = (page) =>{
      setPage (page);
// Updating the current page.
      window.scroll(0,0);
// Scrolling to the top of the page.
    }
// Retrieving the current page number from the URL parameters.
    const{page} = useParams()
    console.log((page))
  return (
// Stack component from Material-UI to layout pagination buttons.
    <Stack spacing={2}
     sx={{ justifyContent: 'center', margin: 'auto', marginTop:'50px'}}>
      <Pagination count={numOfPages} 
      page={parseInt(page)}
      onChange = {(e)=> handlePageChange(e.target.text.Content)}
      variant="outlined" 
      shape="rounded" 
      size="large" 
      sx={{ justifyContent: 'center', margin: 'auto'}}
      renderItem={(item) => (
        <PaginationItem component={Link} to={`/${item.page}`} {...item} />
      )}
      showFirstButton showLastButton/>

    </Stack>

  );
}

export default  AddPagination;