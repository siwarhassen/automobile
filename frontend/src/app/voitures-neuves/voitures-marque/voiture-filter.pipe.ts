import {PipeTransform,Pipe} from '@angular/core';
import {Voiture} from '../../classes/voiture.classe';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
@Pipe({
  name:'filtere'
}
)
export class nouvellevoituresFilter implements PipeTransform
{

  transform(voitures:Voiture[],boite:string,transmission:string,couleur:string,annee:any,minValue:any,maxValue:any):Voiture[]
  {
console.log(couleur,boite,transmission);
var njarab : Voiture[];
if(annee==0||!couleur||!boite ||!transmission|| !voitures)
{
  njarab= voitures;
}


if(boite && !transmission &&  !couleur && annee==0)
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.boite==boite && m.prix>= minValue && m.prix<= maxValue );
}
if(!boite && !transmission &&  !couleur && annee==0 &&(minValue!=2000 ||maxValue!=200000))
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.prix>= minValue && m.prix<= maxValue );
}


if(boite && transmission &&  !couleur && annee==0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.transmission==transmission && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && transmission &&  couleur && annee==0)
{

njarab=voitures.filter(m=> m.boite==boite && m.couleur==couleur && m.transmission==transmission && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && transmission &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.annee==annee && m.couleur==couleur && m.transmission==transmission && m.prix>= minValue && m.prix<= maxValue );
}


if(!boite && transmission &&  !couleur && annee==0)
{

njarab=voitures.filter(m=> m.transmission==transmission && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && !transmission &&  couleur && annee==0)
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.couleur==couleur && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && !transmission &&  !couleur && annee!=0)
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.annee==annee && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && !transmission &&  couleur && annee==0)
{

njarab=voitures.filter(m=> m.boite==boite && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}
if(boite && !transmission &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.annee==annee  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}
if(boite && !transmission &&  !couleur && annee!=0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.annee==annee  && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && transmission &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.transmission==transmission &&m.annee==annee  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && !transmission &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.annee==annee  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}
if(!boite && transmission &&  couleur && annee==0)
{

njarab=voitures.filter(m=> m.transmission==transmission  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && transmission &&  !couleur && annee!=0)
{

njarab=voitures.filter(m=> m.transmission==transmission  && m.annee==annee  && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && transmission &&  !couleur && annee!=0)
{

njarab=voitures.filter(m=> m.transmission==transmission&& m.boite==boite && m.annee==annee  && m.prix>= minValue && m.prix<= maxValue );
}

/*if(annee!=0)
{ console.log("bye" +annee);

njarab=voitures.filter(res=> res.annee==annee);
console.log(njarab);


}



 if(transmission)
{console.log("hi");
  njarab=voitures.filter(res=>{
 return res.transmission.match(transmission);
  });
}


if(couleur && !boite && !transmission)
{console.log("hi");
    njarab= voitures.filter(voiture=>voiture.couleur.indexOf(couleur)!==-1 );
}
if(boite && transmission)
{ njarab=voitures;
  console.log("transmission");
}
*/
return njarab;







  }
}
