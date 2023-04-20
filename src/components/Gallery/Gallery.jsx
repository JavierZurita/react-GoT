import Card from "../Card/Card";

export default function Gallery({data, type}){

    // console.log(data);
    return(
        <div>
            {data && data.map((item, index) => 
                <div key={index}>
                    <Card type={type} data={item}></Card>
                </div>
            )}
        </div>
    )
}