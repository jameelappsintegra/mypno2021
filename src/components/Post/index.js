import React from 'react'


const postData = [{
    "imgUrl": "https://images.unsplash.com/photo-1471421298428-1513ab720a8e",
    "imgAlt": "Several hands holding beer glasses",
    "figCaption": "Billions upon billions",
    "postDesc": "Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?",
},
{
    "imgUrl": "https://images.unsplash.com/photo-1513309914637-65c20a5962e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80",
    "imgAlt": "Several friends doing a toast",
    "figCaption": "Drake Equation",
    "postDesc": "Another world citizens of distant epochs from which we spring descended from astronomers Orion's sword shores of the cosmic ocean.",
},
{
    "imgUrl": "https://images.unsplash.com/photo-1535359056830-d4badde79747?ixlib=rb-1.2.1&auto=format&fit=crop&w=3402&q=80",
    "imgAlt": "Three different glasses of beer",
    "figCaption": "Vast cosmic arena",
    "postDesc": "Galaxies the ash of stellar alchemy prime number science inconspicuous motes of rock and gas brain is the seed of intelligence.",
},
]

const Post = () => {
    return (
        <React.Fragment>
            <section className="breweries" id="breweries">
                <ul>
                    {postData.map((item, i) => {
                        return (
                            <li key={item.i}>
                                <figure>
                                    <img src={item.imgUrl} alt={item.imgAlt} />
                                    <figcaption><h3>{item.figCaption}</h3></figcaption>
                                </figure>
                                <p>{item.postDesc}</p>
                                <a href="#">Visit Website</a>
                            </li>)
                    })}

                </ul>
            </section>
        </React.Fragment>
    )
}

export default Post