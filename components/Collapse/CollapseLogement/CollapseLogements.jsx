import React from 'react';
import DropDown from '../../DropDown/DDLogements';
import Rating from '../../Star/Star'
import Host from '../../Host/Host';
import Tags from '../../Tags/Tags';
import Location from '../../Location/Location';
import Title from '../../Title/Title';
import Slideshow from '../../Slideshow/Slideshow/Slideshow';


export default function CollapseLogements ({ data }){
    return(
        <>
            <Slideshow pictures={data.pictures}/>
            <div className='block-informations'>
                <div className='title-location-tags'>
                    <Title title={data.title}/>
                    <Location location={data.location}/>
                    <Tags tags={data.tags}/>
                </div>
                <div className='rating-host'>
                    <Rating redStar={data.rating} />
                    <Host name={data.host.name} profilPhoto={data.host.picture}/>
                </div>
            </div>
            <div className='dropdown-block'>
                <DropDown title="Description" dataToDisplay={<p>{data.description}</p>}/>
                <DropDown title="Équipements" dataToDisplay={data.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                ))}/>
            </div>
        </>
    ) 
}
