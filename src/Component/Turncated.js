import React,{useState} from 'react'

const Turncated = () => {
    const data = "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.JavaScript (JS) is a computer programming language used to make websites and applications dynamic and interactive.It’s unique because it can run directly in your browser, not just on a server.Along with hypertext markup language (HTML) and cascading style sheets (CSS), JavaScript is one of the most commonly used programming languages of the internet.In fact, 98.4% of all websites use JavaScript as of March 2023.JavaScript, CSS, and HTML work together to make up the user-facing elements of most websites and online applications.Think of these coding languages as the components of a house HTML is the foundation of the house. It provides the basic layout, structure, and content of a website.CSS is the interior design. It provides design, fonts, colors, effects, and other visual elements. JavaScript is the electrical and plumbing systems. JS brings dynamism and interactivity to the website. For example, pop-ups, animations, video and social media embeds, drop-down menus, and many other website components are created using JavaScript.";

    const [open, setOpen] = useState(false)
    const truncatedText = data.slice(0, 50);
    return (
        <div>
         <div className='bg-black text-white'>
                <div className='  p-5 m-10 text-2xl'>
                <p>{open ? data : truncatedText} {!open && <button onClick={() => setOpen(true)}>...see more</button>}</p>
                <p> {open && <button onClick={() => setOpen(false)}>...see less</button>}</p>
               </div>
               </div>
            </div>




            )
}

            export default Turncated