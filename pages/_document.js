import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    render() {
        return(
            <Html lang="en">
                <Head>
                    <meta name='description' content="Dev At E-Commerce Website with Next.JS" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" ></link>

                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" ></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js" ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument