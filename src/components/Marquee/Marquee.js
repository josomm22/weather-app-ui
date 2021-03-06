import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import iconFinder from '../../Helpers/iconFinder';


export default function Marquee({ weatherData }) {



    return (
        <div className="marquee">
            {weatherData ?
                <>
                    <img className="marquee-icon" src={iconFinder(weatherData.Icon)} alt={''} />
                    <div className="marquee-text">{weatherData.IconPhrase}</div>
                </>
                :
                <LoadingOutlined className="marquee-loader"/>
            }

        </div>
    )
};