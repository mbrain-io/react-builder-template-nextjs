import { FC, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useReactBuilder } from '@mbrain/react-builder';

type PageStaticProps = {}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: FC<PageProps> = (props) => {
    const router = useRouter();
    const { reactBuilderConfig, enableReactBuilder } = useReactBuilder();

    useEffect(() => {
        if (reactBuilderConfig.siteId) {
            enableReactBuilder();
            router.push('/');
        }
    }, []);

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Head>
                <title>React Builder</title>
            </Head>

            {/* IF SITE ID IS NOT GIVEN */}
            {!reactBuilderConfig.siteId ? (
                <div
                    style={{
                        width: '500px',
                        backgroundColor: '#FFC043',
                        marginBottom: '150px',
                        borderRadius: '10px',
                        padding: '20px',
                    }}
                >
                    <h3>
                        React Builder
                    </h3>

                    <p>
                        You need to set <b>siteId</b> in ReactBuilderProvider config.
                    </p>

                    <p>
                        ReactBuilderProvider is usually added in _app.tsx file.
                    </p>
                </div>
            ) : null}
        </div>
    )
}

export const getStaticProps: GetStaticProps<PageStaticProps> = async (ctx) => {
    return {
        props: {},
    };
}

export default Page;