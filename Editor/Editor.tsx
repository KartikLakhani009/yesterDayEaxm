import React from 'react'
import MonacoEditor from "@monaco-editor/react";

import { Box } from '@mui/material'

import { useWorkspaceContext } from '../Workspace/WorkspaceContext'

// in lieu of having actual Language Workers to determine the lang from a file path, we'll hard-code some handlers here
const getLanguageFromFilePath = (filePath: string) => {
    if (filePath.endsWith('.html')) {
        return 'html'
    } else if (filePath.endsWith('.css')) {
        return 'css'
    } else if (['.js', '.jsx', '.ts', '.tsx'].some((extension) => filePath.endsWith(extension))) {
        return 'javascript'
    }

    return 'plaintext'
}

export const Editor = () => {
    const { activeFile } = useWorkspaceContext()

    if (activeFile == null) return null;

    return (
        <Box id='editor' flex={1}>
            <MonacoEditor
                value={activeFile?.contents}
                language={getLanguageFromFilePath(activeFile?.path)}
            />
        </Box>
    )
}
