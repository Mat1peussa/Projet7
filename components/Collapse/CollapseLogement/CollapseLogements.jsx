import React from 'react';
import DropDown from '../../DropDown/DDLogements';


export default function CollapseAbout ({params}){
    
    return(
        <>
            <DropDown title="Description" texte="blabla"/>
            <DropDown title="Équipements" liste="toto, lulu"/>
        </>
    )
}