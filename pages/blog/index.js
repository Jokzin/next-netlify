import Head from 'next/head'
import Link from 'next/link'

function Blog() {
    return (
        <>
            <Head>
                <title>My blog !</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>Welcome Blog reader !</div>
            <Link href="/">
                <a>Go back home</a>
            </Link>
        </>
    )
}

export default Blog