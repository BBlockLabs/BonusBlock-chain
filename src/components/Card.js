import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Card = ({name, description, icon, img, to, className}) => (
    <Link className="hover:text-black hover:no-underline" href={to}>
        <div className={clsx('h-full bg-[#f1f1f1] text-black dark:bg-[#1f1f29] dark:text-white rounded-2xl shadow-card px-6 py-10', className)}>
            {img ?
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={useBaseUrl(img)} alt=""/>
                    <b>{name}</b>
                </div>
                :
                <div className="flex flex-col space-y-2.5">
                    <div className="flex items-center space-x-2">
                        {icon && <span className={clsx(icon, 'flex items-center justify-center text-2xl text-yellow')}>&nbsp;</span>}
                        <b>{name}</b>
                        <div>Yeet</div>
                    </div>
                    {description && <div className="flex-1">{description}</div>}
                </div>
            }
        </div>
    </Link>
);

export default Card;
