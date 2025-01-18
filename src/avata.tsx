export default function Avatar(){

    const avatar = "https://th.bing.com/th/id/R.61aa9a3fb3a1534d5abc43605e1dddd1?rik=y6dgAiLGq7%2bK%2bg&pid=ImgRaw&r=0";
    const descripition = "Gregorio Bilinski";


    return (
        <img
        className="Avatar"
        src= {avatar}
        alt= {descripition} 
        />
    )
}