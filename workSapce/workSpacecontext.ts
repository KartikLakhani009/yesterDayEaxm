import React, { createContext, useContext, useMemo, useState } from 'react'

export type File = {
  path: string
  contents: string
}

type LastFile = {
  isFile:true,
  contents:string,
  originPath:string
}

export type FileTree = {
  [key: string]: FileTree | string | null;
};


export const workspaceContext = createContext<{
  activeFile?: FileTree,
  activateFile: React.Dispatch<React.SetStateAction<string>>,
  files: FileTree[]
}>({
  activeFile: null,
  activateFile: () => {},
  files: [],
})

export const WorkspaceProvider: React.FC<{ files: File[] }> = ({ files, children }) => {
  const [activeFilePath, setActiveFilePath] = useState<string>(null)

  const activeFile = useMemo(() => {
    const foundFile = files.find((f) => f?.originPath === activeFilePath)
    return foundFile || files[0]
  }, [activeFilePath])

  const ctxVal = {
    activeFile,
    activateFile: setActiveFilePath,
    files,
  }

  return <workspaceContext.Provider value={ctxVal}>{children}</workspaceContext.Provider>
}

export function useWorkspaceContext() {
  return useContext(workspaceContext)
}
