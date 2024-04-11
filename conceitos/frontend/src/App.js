import React, { useState } from 'react';

import Header from './components/Header';

/**
 * Tudo que vc precisa saber no React
 * 
 * - Componentes
 * - Propriedades
 * - Estado & Imutabilidade
 * 
 */

function App() {

    // useState return an Array with 2 positions
    //
    // 1. Position - Variable with your initial value
    // 2. Position - Function for updating this value

    const [projects, setProjects] = useState(['Desenvolvimento de Apps', 'Frontend Web']);

    function handleAddProject(){

        //projects.push(`Novo projeto ${Date.now()}`);
        // ...projects -> Spread Operator - Copy the Array, go through the entire array and add the new elements
        setProjects([...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title="Projetos"/>
                <ul>
                    {projects.map( project => <li key={project}>{project}</li>)}
                </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;