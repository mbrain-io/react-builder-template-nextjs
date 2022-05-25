import dynamic from 'next/dynamic';
import { createReactBuilderBlockLibs } from '@mbrain/react-builder';

export const blockLibs = createReactBuilderBlockLibs([
    {
        id: 'react-builder-ui',
        components: {
            // 'Block1': dynamic(() => import('@mbrain/react-builder/dist/blocks/Block1')),
            // 'Block2': dynamic(() => import('@mbrain/react-builder/dist/blocks/Block2')),
            // 'Block3': dynamic(() => import('@mbrain/react-builder/dist/blocks/Block3')),
        }
    }
]);