import { useEffect, useState } from "react";
import axios from "axios";



function ListeJoueurs(){
    const [joueurs, setJoueurs] = useState([])
    useEffect( ()=>{
        axios.get('http://172.50.112.141:8080/classement/joueurs')
        .then( response =>{
          setJoueurs(response.data);
        })
        .catch(error =>{
          console.log('Error fetching Data: '+ error);
        })

      }, []);
    
    return(
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Classement</th>
                <th scope="col">Joueur</th>
                <th scope="col">Equipe</th>
                <th scope="col">Matchs Joués</th>
                <th scope="col">Moyenne Minutes Jouées par Match</th>
                <th scope="col">Moyenne Points Par Match</th>
                <th scope="col">Total 3 points</th>
                <th scope="col">Moyenne Rebonds</th> 
                <th scope="col">Moyenne Passes Décisives</th> 
            </tr>
            </thead>
            <tbody>
            {joueurs.map((joueur, index) => (
                <tr>
                    <td>{index+1}</td>
                    <td>{joueur.joueur.nom}</td>
                    <td>{joueur.joueur.equipe.nom}</td>
                    <td>{joueur.match_joues}</td>
                    <td>{joueur.moyenne_minutes_jouees}</td>
                    <td>{joueur.moyenne_points}</td>
                    <td>{joueur.total_trois_points}</td>
                    <td>{joueur.moyenne_rebonds}</td> 
                    <td>{joueur.moyenne_passes_decisives}</td> 
                </tr> 
            ))}
            
           
        
            </tbody>
        </table>

    );
}

export default ListeJoueurs;