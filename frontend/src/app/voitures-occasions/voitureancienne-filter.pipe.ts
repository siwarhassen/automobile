import {PipeTransform,Pipe} from '@angular/core';
import {Voiture} from '../classes/voiture.classe';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
@Pipe({
  name:'filterancienne'
}
)
export class anciennevoituresFilter implements PipeTransform
{

  transform(voitures:Voiture[],boite:string,modele:string,couleur:string,annee:any,minValue:any,maxValue:any,marquef:string):Voiture[]
  {
console.log(couleur,boite,modele);
var njarab : Voiture[];
if(!marquef||annee==0||!couleur||!boite ||!modele|| !voitures)
{
  njarab= voitures;
}

if(marquef && !boite && !modele &&  !couleur && annee==0 )
{
  njarab=voitures.filter(m=> m.marque==marquef && m.prix>= minValue && m.prix<= maxValue );
}
if(!marquef && !boite && !modele &&  !couleur && annee==0 )
{
njarab= voitures;
}

if(boite && !modele &&  !couleur && annee==0)
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.boite==boite && m.prix>= minValue && m.prix<= maxValue );
}
if(!boite && !modele &&  !couleur && annee==0 &&(minValue!=2000 ||maxValue!=200000))
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.prix>= minValue && m.prix<= maxValue );
}


if(boite && modele &&  !couleur && annee==0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.modele==modele && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && modele &&  couleur && annee==0)
{

njarab=voitures.filter(m=> m.boite==boite && m.couleur==couleur && m.modele==modele && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && modele &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.annee==annee && m.couleur==couleur && m.modele==modele && m.prix>= minValue && m.prix<= maxValue );
}


if(!boite && modele &&  !couleur && annee==0)
{

njarab=voitures.filter(m=> m.modele==modele && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && !modele &&  couleur && annee==0)
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.couleur==couleur && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && !modele &&  !couleur && annee!=0)
{
//njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
njarab=voitures.filter(m=> m.annee==annee && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && !modele &&  couleur && annee==0)
{

njarab=voitures.filter(m=> m.boite==boite && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}
if(boite && !modele &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.annee==annee  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}
if(boite && !modele &&  !couleur && annee!=0)
{

njarab=voitures.filter(m=> m.boite==boite &&m.annee==annee  && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && modele &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.modele==modele &&m.annee==annee  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && !modele &&  couleur && annee!=0)
{

njarab=voitures.filter(m=> m.annee==annee  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}
if(!boite && modele &&  couleur && annee==0)
{

njarab=voitures.filter(m=> m.modele==modele  && m.couleur==couleur  && m.prix>= minValue && m.prix<= maxValue );
}

if(!boite && modele &&  !couleur && annee!=0)
{

njarab=voitures.filter(m=> m.modele==modele  && m.annee==annee  && m.prix>= minValue && m.prix<= maxValue );
}

if(boite && modele &&  !couleur && annee!=0)
{

njarab=voitures.filter(m=> m.modele==modele&& m.boite==boite && m.annee==annee  && m.prix>= minValue && m.prix<= maxValue );
}

/*if(annee!=0)
{ console.log("bye" +annee);

njarab=voitures.filter(res=> res.annee==annee);
console.log(njarab);


}



 if(modele)
{console.log("hi");
  njarab=voitures.filter(res=>{
 return res.modele.match(modele);
  });
}


if(couleur && !boite && !modele)
{console.log("hi");
    njarab= voitures.filter(voiture=>voiture.couleur.indexOf(couleur)!==-1 );
}
if(boite && modele)
{ njarab=voitures;
  console.log("modele");
}
*/
return njarab;







  }
}
