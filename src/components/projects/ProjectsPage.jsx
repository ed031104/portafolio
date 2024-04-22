 import NavBar from "../src/components/NavBar";

 export function ProjectPages () {
    
    return(
        <>
        <header>
            <NavBar/>
        </header>

        <main>
            <div className="grid grid-cols-3 ">
                <div>
                    <h1>Informacion</h1>
                </div>

                <div>
                    <h1>Proyecto</h1>
                </div>

                <div>
                    <h1>Datos</h1>
                </div>
            </div>
        </main>

        </>
    );
}