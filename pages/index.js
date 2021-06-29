import Head from 'next/head'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/pokemon')
    }

    return (
        <>
            <Head>
                <title>My next.js Site !</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>Welcome</div>
            <button onClick={handleClick}>Click me !</button>
        </>
    )
}

export default Home