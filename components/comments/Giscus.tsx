'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments() {
    const { theme } = useTheme();

    return (
        <div className="mt-10 pt-10 border-t border-border">
            <Giscus
                id="comments"
                repo="kareemrb27/digital-garden"
                repoId="R_kgDONqgqgA" // Placeholder, user needs to update
                category="General"
                categoryId="DIC_kwDONqgqgM4CkLr_" // Placeholder, user needs to update
                mapping="pathname"
                term="Welcome to my digital garden!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={theme === 'dark' ? 'dark' : 'light'}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
