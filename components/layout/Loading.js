import { Box, CircularProgress, Modal } from '@mui/material';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  backdropFilter: 'blur(10px)',
  p: 2,
};

export default function Loading({ loading }) {
  return (
    <div>
      <Modal
        open={loading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <CircularProgress />
        </Box>
      </Modal>
    </div>
  );
}
