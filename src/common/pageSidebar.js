const pageSidebar = [
    {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Overview',
        items: [
            {type: 'ref', id: 'overview/about', href: 'docs/overview/about', label: 'About'},
            {type: 'ref', id: 'overview/connect-with-community', href: 'docs/overview/connect-with-community', label: 'Connect With Community'},
            {type: 'ref', id: 'overview/how-rewarding-works', href: 'docs/overview/how-rewarding-works', label: 'How Rewarding Works'},
        ],
    },
    {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Running a node',
        items: [
            {type: 'ref', id: 'running-a-node/prerequisites', href: 'docs/running-a-node/prerequisites', label: 'Prerequisites'},
            {type: 'ref', id: 'running-a-node/node-installation', href: 'docs/running-a-node/node-installation', label: 'Node Installation'},
            {type: 'ref', id: 'running-a-node/set-up-keys', href: 'docs/running-a-node/set-up-keys', label: 'Set up keys'},
            {type: 'ref', id: 'running-a-node/node-configuration', href: 'docs/running-a-node/node-configuration', label: 'Node configuration'},
            {type: 'ref', id: 'running-a-node/join-a-network', href: 'docs/running-a-node/join-a-network', label: 'Join a network'},
            {type: 'ref', id: 'running-a-node/making-a-service', href: 'docs/running-a-node/making-a-service', label: 'Making a service'},

        ],
    },
    {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Become a Validator',
        items: [
            {type: 'ref', id: 'becoming-a-validator/introduction', href: 'docs/becoming-a-validator/introduction', label: 'Introduction'},
            {type: 'ref', id: 'becoming-a-validator/requirements', href: 'docs/becoming-a-validator/requirements', label: 'Requirements'},
            {type: 'ref', id: 'becoming-a-validator/testnet-faucet', href: 'docs/becoming-a-validator/testnet-faucet', label: 'Testnet faucet'},
            {type: 'ref', id: 'becoming-a-validator/running-a-validator', href: 'docs/becoming-a-validator/running-a-validator', label: 'Running a validator'},
            {type: 'ref', id: 'becoming-a-validator/troubleshooting', href: 'docs/becoming-a-validator/troubleshooting', label: 'Troubleshooting'},
        ],
    },
];

export default pageSidebar;
