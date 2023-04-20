import Card from "../Card/Card";

export default function Gallery({data}){

    return(
        <div>
            {data && data.map((char, index) => 
                <div key={index}>
                    <Card data={char}></Card>
                </div>
            )}
        </div>
    )
}