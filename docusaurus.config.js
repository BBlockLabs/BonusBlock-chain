require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'BonusBlock Docs',
    tagline: 'Rewarding on-chain activities',
    url: 'https://BonusBlock.io',
    baseUrl: '/BonusBlock-docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'favicon.ico',
    organizationName: 'BBlockLabs',
    projectName: 'BonusBlock-docs',
    trailingSlash: false,
    i18n: {
        defaultLocale: 'en-GB',
        locales: ['en-GB']
    },
    themeConfig: {
        navbar: {
            title: 'Docs',
        },
        footer: {},
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        colorMode: {
            respectPrefersColorScheme: true,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 3,
        },
    },
    customFields: {
        pageCategories: [
            {
                name: 'overview',
                children: [
                    {name: 'About BonusBlock', value: '/docs/overview/about', img: '/img/illustrations/about-us.svg'},
                    {name: 'Connect with Community', value: '/docs/overview/connect-with-community', img: '/img/illustrations/connect-community.svg'},
                    {name: 'How Rewarding works', value: '/docs/overview/how-rewarding-works', img: '/img/illustrations/rewards.svg'},
                    {name: 'Media Kit', value: '/docs/overview/media-kit', img: '/img/illustrations/media-kit.svg'},
                ],
            },
            {
                name: 'nodes',
                children: [
                    {
                        name: 'Prerequisites',
                        value: '/docs/running-a-node/prerequisites',
                        icon: 'iconoir-clipboard-check',
                        description: 'Installation requirements for validator nodes',
                    },
                    {
                        name: 'Running a node',
                        value: '/docs/running-a-node/node-installation',
                        icon: 'iconoir-code-brackets-square',
                        description: 'Installation of the BonusBlock node',
                    },
                    {
                        name: 'Become a validator',
                        value: '/docs/becoming-a-validator/running-a-validator',
                        icon: 'iconoir-add-hexagon',
                        description: 'Learn how to upgrade your node to a validator',
                    },
                    {
                        name: 'Troubleshooting',
                        value: '/docs/becoming-a-validator/troubleshooting',
                        icon: 'iconoir-help-circle',
                        description: 'Solutions to the most common problems that may occur during the node runtime',
                    },
                ],
            },
        ],
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    breadcrumbs: true,
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true
                },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                        require.resolve('./src/css/markdown.css'),
                        require.resolve('./src/css/icons.css'),
                    ],
                },
            },
        ],
    ],
    plugins: [
        async function docusaurusTailwindcssPlugin(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    postcssOptions.plugins.push(require('postcss-nested'));
                    return postcssOptions;
                },
            };
        },
    ],
};
