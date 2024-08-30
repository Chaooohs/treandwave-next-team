import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined({ totalGoods, onPaginationClick }) {
  return (
    <div className='flex justify-center'>
      <Stack spacing={1}>
        <Pagination
          count={Math.ceil(totalGoods / 10)}
          variant="outlined"
          shape="rounded"
          onChange={onPaginationClick}
        />
      </Stack>
     </div>
  );
}