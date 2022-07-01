import { FC, useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Blocks, BuilderJson, PageData } from '@mbrain/react-builder';
import { readBuilderJson } from '@mbrain/react-builder/dist/backend';

type PageStaticProps = {
    builderJson: BuilderJson;
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: FC<PageProps> = (props) => {
    const [pageData, setPageData] = useState(props.builderJson.page);

    return (
        <div
            style={{
                overflow: 'auto',
                height: '100%',
            }}
        >
            <Head>
                <title>{pageData.title}</title>
            </Head>

            <PageData
                data={props.builderJson.page}
                editForm={props.builderJson.pageEditForm}
                onChange={setPageData}
            />

            <Blocks
                name="Content"
                data={props.builderJson.blocks}
            />
        </div>
    )
}

export const getStaticProps: GetStaticProps<PageStaticProps> = async (ctx) => {
    const builderJson = readBuilderJson(__filename);
    return {
        props: {
            builderJson,
        },
    };
}

export default Page;