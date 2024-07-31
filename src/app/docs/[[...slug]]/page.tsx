export default function Docs({params} : {
    params:{
        slug: string[] // array of routes each element represent a route /route/..
    }
}) {
    if(params.slug.length === 2) {
        // localhost:3000/docs/feture/concept
        return (
            <h1> view docs of feture {params.slug[0]}
            and concept {params.slug[1]}</h1>
        )
    }
    else if(params.slug.length === 1) {
         // localhost:3000/docs/feture
        return (
            <h1>view docs of feture {params.slug[0]}</h1>
        )
    }
    return (
         // localhost:3000/docs
        <h1>Docs home page</h1>
    )
}