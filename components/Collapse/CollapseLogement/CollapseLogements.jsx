import React from 'react';
import Host from '../../../components/Host/Host';
import Tags from '../../../components/Tags/Tags';
import Location from '../../../components/Location/Location';
import Title from '../../../components/Title/Title';
import Slideshow from '../../../components/Slideshow/Slideshow/Slideshow';
import DropDown from '../../DropDown/DDLogements';
import Stars from '../../Star/Star'


export default function CollapseLogements ({ data }){
    return(
    <div>
        <Slideshow pictures={data.pictures}/>
        <div className='block-informations'>
            <div className='title-location-tags'>
              <Title title={data.title}/>
              <Location location={data.location}/>
              <Tags tags={data.tags}/>
            </div>
            <div className='rating-host'>
              <Stars redStar={data.rating} />
              <Host name={data.host.name} profilPhoto={data.host.picture}/>
            </div>
        </div>
        <div className='dropdown-block'>
            <DropDown title="Description" dataToDisplay={<p>{data.description}</p>}/>
            <DropDown title="Équipements" dataToDisplay={data.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
            ))}/>
        </div>
    </div>
    ) 
}
