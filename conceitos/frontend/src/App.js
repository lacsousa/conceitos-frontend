import React from 'react';

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

    const projects = ['Desenvolvimento de Apps', 'Frontend Web'];

    function handleAddProject(){
        projects.push(`Novo projeto ${Date.now()}`);
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