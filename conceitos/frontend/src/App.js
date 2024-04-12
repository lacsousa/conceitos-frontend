import React, { useState, useEffect } from 'react';
import './App.css';
import officeImage from './assets/office.jpg';
import Header from './components/Header';

import api from './services/api';

/**
 * Tudo que vc precisa saber no React
 * 
 * - Componentes
 * - Propriedades
 * - Estado & Imutabilidade
 * 
 */

// Install Axios - It will call our API
// yarn add axios

function App() {

    // useState return an Array with 2 positions
    //
    // 1. Position - Variable with your initial value
    // 2. Position - Function for updating this value

    //const [projects, setProjects] = useState(['Desenvolvimento de Apps', 'Frontend Web']);

    // Always start the useState with the same type of the const. 
    // How projects is an array, we use [] no useState
    const [projects, setProjects] = useState([]); 

    useEffect(() => {
        api.get('projects').then( response =>{
            setProjects(response.data);
            console.log(response);
        })
    }, []);

    function handleAddProject(){

        //projects.push(`Novo projeto ${Date.now()}`);
        // ...projects -> Spread Operator - Copy the Array, go through the entire array and add the new elements
        setProjects([...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title="Projetos"/>

                <img width={300} src={officeImage} />
                <ul>
                    {projects.map( project => <li key={project.id}>{project.title}</li>)}
                </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;