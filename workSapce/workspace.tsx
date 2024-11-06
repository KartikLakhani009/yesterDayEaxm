import React, { useMemo } from 'react'

import { Box } from '@mui/material'

import { FilePane } from '../FilePane/FilePane'
import { Editor } from '../Editor/Editor'

import { WorkspaceProvider } from './WorkspaceContext'
import defaultFiles from './defaultFiles'
import {buildFileTree } from './buildStructurePath'

export const Workspace = () => {

  const newFileStructure = useMemo(()=>buildFileTree(defaultFiles),[])

  console.log("newFileStructure: ",newFileStructure)

  return (
    <WorkspaceProvider files={newFileStructure}>
      <Box display='flex' height='100%'>
        <FilePane />
        <Editor />
      </Box>
    </WorkspaceProvider>
  )
}


