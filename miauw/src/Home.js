function Home(){
    const mensagemAoClickar = function (){
        console.log("harou evrinhone ");
    }


    return(
        <div className = "home">
            <h2>home page</h2>
            <button onClick={mensagemAoClickar}>click me</button>
        </div>
    );
}

export default Home;