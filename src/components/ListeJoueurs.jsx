import { useEffect, useState } from "react";
import axios from "axios";



function ListeJoueurs(){

    const default_joueurs = [
        {
            joueur: {
            id: 7,
            nom: "Joueur 2B",
            equipe: {
            id: 2,
            nom: "Equipe B"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 29.666666666666668,
            moyenne_points: 22.666666666666668,
            total_trois_points: 9,
            moyenne_rebonds: 12.666666666666666,
            moyenne_passes_decisives: 8.666666666666666
            },
            {
            joueur: {
            id: 10,
            nom: "Joueur 5B",
            equipe: {
            id: 2,
            nom: "Equipe B"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 28,
            moyenne_points: 20,
            total_trois_points: 11,
            moyenne_rebonds: 5.666666666666667,
            moyenne_passes_decisives: 5.333333333333333
            },
            {
            joueur: {
            id: 9,
            nom: "Joueur 4B",
            equipe: {
            id: 2,
            nom: "Equipe B"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 34.333333333333336,
            moyenne_points: 19.333333333333332,
            total_trois_points: 12,
            moyenne_rebonds: 7.333333333333333,
            moyenne_passes_decisives: 4.666666666666667
            },
            {
            joueur: {
            id: 1,
            nom: "Joueur 1A",
            equipe: {
            id: 1,
            nom: "Equipe A"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 33,
            moyenne_points: 17.666666666666668,
            total_trois_points: 9,
            moyenne_rebonds: 10,
            moyenne_passes_decisives: 3.3333333333333335
            },
            {
            joueur: {
            id: 8,
            nom: "Joueur 3B",
            equipe: {
            id: 2,
            nom: "Equipe B"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 29.333333333333332,
            moyenne_points: 17.333333333333332,
            total_trois_points: 7,
            moyenne_rebonds: 9.666666666666666,
            moyenne_passes_decisives: 8.333333333333334
            },
            {
            joueur: {
            id: 4,
            nom: "Joueur 4A",
            equipe: {
            id: 1,
            nom: "Equipe A"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 37.333333333333336,
            moyenne_points: 16,
            total_trois_points: 5,
            moyenne_rebonds: 5.333333333333333,
            moyenne_passes_decisives: 4.333333333333333
            },
            {
            joueur: {
            id: 11,
            nom: "Joueur 1C",
            equipe: {
            id: 3,
            nom: "Equipe C"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 28.666666666666668,
            moyenne_points: 15.666666666666666,
            total_trois_points: 7,
            moyenne_rebonds: 4,
            moyenne_passes_decisives: 3.6666666666666665
            },
            {
            joueur: {
            id: 14,
            nom: "Joueur 4C",
            equipe: {
            id: 3,
            nom: "Equipe C"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 20.666666666666668,
            moyenne_points: 14.333333333333334,
            total_trois_points: 7,
            moyenne_rebonds: 4.666666666666667,
            moyenne_passes_decisives: 5.666666666666667
            },
            {
            joueur: {
            id: 15,
            nom: "Joueur 5C",
            equipe: {
            id: 3,
            nom: "Equipe C"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 28,
            moyenne_points: 14.333333333333334,
            total_trois_points: 9,
            moyenne_rebonds: 5.666666666666667,
            moyenne_passes_decisives: 5.333333333333333
            },
            {
            joueur: {
            id: 2,
            nom: "Joueur 2A",
            equipe: {
            id: 1,
            nom: "Equipe A"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 32.333333333333336,
            moyenne_points: 14,
            total_trois_points: 10,
            moyenne_rebonds: 9.666666666666666,
            moyenne_passes_decisives: 9.333333333333334
            },
            {
            joueur: {
            id: 13,
            nom: "Joueur 3C",
            equipe: {
            id: 3,
            nom: "Equipe C"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 41.666666666666664,
            moyenne_points: 13.666666666666666,
            total_trois_points: 7,
            moyenne_rebonds: 12.666666666666666,
            moyenne_passes_decisives: 6.333333333333333
            },
            {
            joueur: {
            id: 12,
            nom: "Joueur 2C",
            equipe: {
            id: 3,
            nom: "Equipe C"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 28,
            moyenne_points: 13.333333333333334,
            total_trois_points: 9,
            moyenne_rebonds: 10.333333333333334,
            moyenne_passes_decisives: 7
            },
            {
            joueur: {
            id: 3,
            nom: "Joueur 3A",
            equipe: {
            id: 1,
            nom: "Equipe A"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 43.333333333333336,
            moyenne_points: 11,
            total_trois_points: 4,
            moyenne_rebonds: 5,
            moyenne_passes_decisives: 5.333333333333333
            },
            {
            joueur: {
            id: 5,
            nom: "Joueur 5A",
            equipe: {
            id: 1,
            nom: "Equipe A"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 28.333333333333332,
            moyenne_points: 9.666666666666666,
            total_trois_points: 7,
            moyenne_rebonds: 5.333333333333333,
            moyenne_passes_decisives: 5.666666666666667
            },
            {
            joueur: {
            id: 6,
            nom: "Joueur 1B",
            equipe: {
            id: 2,
            nom: "Equipe B"
            }
            },
            match_joues: 3,
            moyenne_minutes_jouees: 32,
            moyenne_points: 9.333333333333334,
            total_trois_points: 0,
            moyenne_rebonds: 7,
            moyenne_passes_decisives: 4.666666666666667
            }
        ]
    const [joueurs, setJoueurs] = useState(default_joueurs)
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