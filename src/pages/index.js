import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


import CardsList from '../components/CardsList';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    const categories = siteConfig.customFields.pageCategories;

    const overview = categories[0].children || [];
    const validators = categories[1].children || [];
    // const becomeValidator = categories[1].children || [];

    return (
        <Layout className="home-page" title="Home" description="Rewarding users across Web3 for on-chain activity!">
            <main className="py-40">
                <div className="space-y-20">
                    <div>
                        <h1 className="hero-1 uppercase pb-4">
                            Rewarding<br/><span className={'text-yellow'}>on-chain</span> activity!
                        </h1>
                        <p className="title-4 max-w-5xl">
                            Explore BonusBlock network how smart contracts are used to reward users across Web3!
                        </p>
                    </div>

                    <CardsList items={overview}/>
                    <CardsList heading="Become a Validator" items={validators}/>
                </div>
            </main>
        </Layout>
    );
}
