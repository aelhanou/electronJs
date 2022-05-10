import React, { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from 'react-query'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useLoginMutation, useUsersQuery } from './generated'

import './App.css';
import { SideBar } from './components';
import { Home } from './pages/Home';
import Project from './pages/Project';
import GetFiliales from './pages/GetFiliales';
import { Import } from './pages/Import';


// const fs = window.require("fs")
// const pathModule = window.require("path")

// const { app } = window.require("@electron/remote")

// const formatSize = (size: any) => {
//   var i = Math.floor(Math.log(size) / Math.log(1024))
//   return (
//     (size / Math.pow(1024, i)).toFixed(2) * 1 +
//     ' '
//     + ["B", "KB", "MB", "GB", "TB"][i]
//   )
// }


function App() {
  //   const [path, setPath] = useState(app.getAppPath())
  const [value, setValue] = useState([])
  // const queryClient = useQueryClient()

  //   const files = useMemo(
  //     () => fs.readdirSync(path).map(file => {
  //       const stats = fs.statSync(pathModule.join(path, file))
  //       return {
  //         name: file,
  //         size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
  //         directory: stats.isDirectory()
  //       }
  //     }).sort((a: any, b: any) => {
  //       if (a.directory === b.directory) {
  //         return a.name.localeCompare(b.name)
  //       }

  //       return a.directory ? -1 : 1
  //     })
  //     , [path])


  // const onBack = () => setPath(pathModule.dirname(path))
  // const onOpen = (folder: any) => setPath(pathModule.join(path, folder))

  // const { mutate } = useLoginMutation({
  //   onSuccess: () => queryClient.invalidateQueries('login')
  // // })

  // const { data, isLoading }: any = useUsersQuery()
  // useEffect(() => {
  //   if (isLoading == false) {
  //     console.log(data.users);
  //   }
  // }, [isLoading])

  // useEffect(() => {

  //   if (data) {
  //     setValue(data)
  //   }
  // }, [data])

  return (
    <>
      {/* {(isLoading == false) && data?.users?.map((e: any, i: any) => {
        return (

          <div key={i}>
            <div  >bro:{e.id}</div>
            <div  >bro:{e.fullName}</div>
            <div  >bro:{e.email}</div>
          </div>

        )

      })} */}

      {/* <div>
        <div> */}
      {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */}

      {/* </div> */}

      {/* <button onClick={() => {
          mutate({
            loginInput: {
              email: 'elhanouniazeddine00@gmail.com',
              password: '123'
            }
          })

        }}>add</button> */}
      {/* // </div> */}

      {/* <div className='w-full  '>
        <SideBar />
      </div> */}

      <Router>
        <div className='w-full flex'>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/getFiliales" element={<GetFiliales />} />
            <Route path="/import" element={<Import />} />
            
          </Routes>
        </div>

      </Router>

    </>
  )
}

export default App;
