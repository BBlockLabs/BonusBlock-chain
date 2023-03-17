import React from 'react';
import {BBlockLogo, Link} from '../../components/Ui';


const Footer = () => (
    <footer className="border-t dark:border-[#ffffff24]">
        <div className="container py-10 lg:py-20 relative">
            <div>
                <div className="lg:flex">
                    <div className="w-full lg:w-1/3 pb-12">
                        <BBlockLogo style={{width: '145px', height: '70px'}}/>
                    </div>
                    <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8">
                        <div className="flex-shrink-0 flex flex-col space-y-3">
                            <h4 className="caption font-bold">BBlockLabs</h4>
                            <div>
                                <Link className="caption" href="https://github.com/BBlockLabs">
                                    GitHub
                                </Link>
                            </div>
                        </div>
                        <div className="flex-shrink-0 flex flex-col space-y-3">
                            <h4 className="caption font-bold">Community</h4>
                            <div>
                                <Link className="caption" href="https://twitter.com/bonus_block">
                                    Twitter
                                </Link>
                            </div>
                            <div>
                                <Link className="caption" href="https://t.me/bonusblock">
                                    Telegram
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 border-t border-black/20">
                <p className="label text-gray dark:text-white/90">
                    The information on this website is intended solely for general informational purposes and should not be regarded as a formal offer to buy or sell any securities in any jurisdiction, legal or investment advice, or tax advice. If you require legal, investment, or tax advice, please seek the guidance of a professional advisor. The BonusBlock is presently under development and may be subject to modification. As a result, the protocol documentation and website content may not accurately reflect the current state of the network at any given time. The network documentation and website content are not final and are subject to change.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
