import React from 'react'
import { Box, Typography } from '@mui/material'

import { useWorkspaceContext } from '../Workspace/WorkspaceContext'

import { FileRow } from './components/FileRow'

export const FilePane = () => {
  const { files } = useWorkspaceContext()

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h6">Files</Typography>
      </Box>
      <Box>
        {
          files.map(folder=><ui>
            
            </ui>)
        }
      </Box>
    </Box>
  )
}
