import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import Image from "next/image";

const logo = (
    <span style={{ display: "flex", gap: "8px", fontWeight: 500 }}>
        <Image
            src="/images/logo.png"
            alt="Streamaze Logo"
            width={22}
            height={22}
        />
        Streamaze
    </span>
);

const config: DocsThemeConfig = {
    project: {
        link: "https://github.com/ZaneH/streamaze-docs",
    },
    docsRepositoryBase: "https://github.com/ZaneH/streamaze-docs/tree/main",
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – Streamaze",
            };
        }
    },
    logo,
    head: function useHead() {
        const { title } = useConfig();
        // const { route } = useRouter();
        // const socialCard =
        //     route === "/" || !title
        //         ? "https://nextra.site/og.jpeg"
        //         : `https://nextra.site/api/og?title=${title}`;

        return (
            <>
                <meta name="msapplication-TileColor" content="#fff" />
                <meta name="theme-color" content="#fff" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="Content-Language" content="en" />
                <meta
                    name="description"
                    content="Learn how to use the ultimate live stream dashboard."
                />
                <meta
                    name="og:description"
                    content="Learn how to use the ultimate live stream dashboard."
                />
                <meta name="twitter:card" content="summary_large_image" />
                {/* <meta name="twitter:image" content={socialCard} /> */}
                <meta name="twitter:site:domain" content="docs.streamaze.xyz" />
                <meta name="twitter:url" content="https://docs.streamaze.xyz" />
                <meta
                    name="og:title"
                    content={title ? title + " – Streamaze" : "Streamaze"}
                />
                {/* <meta name="og:image" content={socialCard} /> */}
                <meta name="apple-mobile-web-app-title" content="Streamaze" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="icon" href="/favicon.png" type="image/png" />
                <link
                    rel="icon"
                    href="/favicon-dark.svg"
                    type="image/svg+xml"
                    media="(prefers-color-scheme: dark)"
                />
                <link
                    rel="icon"
                    href="/favicon-dark.png"
                    type="image/png"
                    media="(prefers-color-scheme: dark)"
                />
                <link rel="icon" href="/favicon.ico" />
            </>
        );
    },
    // banner: {
    //   key: '2.0-release',
    //   text: (
    //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
    //       🎉 Nextra 2.0 is released. Read more →
    //     </a>
    //   )
    // },
    editLink: {
        text: "Improve this page on GitHub →",
    },
    // feedback: {
    //   content: 'Question? Give us feedback →',
    //   labels: 'feedback'
    // },
    sidebar: {
        titleComponent({ title, type }) {
            if (type === "separator") {
                return <span className="cursor-default">{title}</span>;
            }
            return <>{title}</>;
        },
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    footer: {
        text: (
            <div className="flex w-full flex-col items-center sm:items-start">
                <p className="mt-6 text-xs">
                    Streamaze © {new Date().getFullYear()}
                </p>
            </div>
        ),
    },
};

export default config;
