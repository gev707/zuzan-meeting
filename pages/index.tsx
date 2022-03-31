import { useRouter } from 'next/router'
import {  useEffect } from 'react'
import MainLayout from "../src/containers/MainLayout";

const IndexPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  })
  return (
      <>
      </>
  )
}


export default IndexPage

IndexPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>
}