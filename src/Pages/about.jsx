import React from "react";

export default function About() {
    return(
       <section className="">
            <div className="container mx-auto flex-col items-center h-[65vh]">
                <div className="pt-[30px]">
                    <h1 className="text-3xl font-bold text-gray-50">About Me</h1>
                </div>
                <div className="flex justify-between item-center text-justify gap-10 text-gray-50">
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nam magni officiis veritatis, eius necessitatibus odit esse quasi dolore quam! Tempore veritatis sit atque quidem obcaecati recusandae tempora illo.    
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore aliquam optio, eos ipsum, molestias aliquid facilis numquam veritatis, nemo neque vero minus! Totam debitis, facilis excepturi perspiciatis dicta accusamus.
                    </div>
                </div>
            </div>
       </section> 
    )
}