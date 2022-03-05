import { useRouter } from 'next/router'
import useSWR from 'swr'

import Head from 'components/head'

const Index = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, error } = useSWR(`posts?slug=${slug}`)

  return (
    <>
      <Head title='Home' />
      <div className='max-w-screen-md mx-auto py-3 flex flex-row flex-wrap'>
        {data && !error && (
          <>
            <div className='mb-2 text-2xl font-medium'>{data[0]?.title.rendered}</div>
            <div dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></div>
          </>
        )}
      </div>
    </>
  )
}

export default Index
