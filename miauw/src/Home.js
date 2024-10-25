import {useState} from 'react';

function Home(){
    // velho const nome = "mario";
    //const [nome, setNome(mudar alguma coisa)] = useState(); novo

    const [nome, setNome] = useState('mario');
    const [idade, setIdade] = useState( 20);

    const mensagemAoClickar = function (){
        setNome("luiiiiiiiigi");
        setIdade(24);

    }
    


    return(
        <div className = "home">
            <h2>home page</h2>
            <button onClick={mensagemAoClickar}>click me</button>
            <p>{nome}, tem {idade} anos</p>
        </div>
    );
}

export default Home;