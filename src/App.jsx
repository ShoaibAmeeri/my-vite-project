import img from'./assets/img.png';
// import  'myStyle.css'

// function hello() {
//   return (
//     <>
//     <h1>Hello</h1>
//     </>
//   )
// }
// export default hello
function Cv(){
  return(
    <>

   <div className="main">
    <div className="border">
    <div className="name">
    <h1>SHOAIB</h1>
      <h1 style={{marginLeft:'50px'}}>AMEERI</h1>
    </div>


    </div>
    <div className="st"></div>
     <div className="left" >
       <img src={img} width={300} height={300} alt="hello" srcset="" />


      <div className="about"> 
       <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue dui.</p>
       <br /><br />
      <a href="">+123-456-7890</a> <br />
      <a href="">hello@reallygreatsite.com</a> <br />
      <a href="">123 Anywhere St., Any City</a> 
       </div>

     </div>
     <div className="right" >
      <button className='exp'> Project links</button>
      <br />
     <p className='space'> Arowwai Industries
      <br />
      Sydney - Australia
      <br />
      2020 - 2022
      </p>
      <p className='space '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue.
      </p>
      <button className='exp'> Education</button>
      <br />
     <p className='space'> BSCS
      <br />
      GCUF - Faisalabad
      <br />
      2020 - 2024(present) 

      </p>
      <p className='space '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue.
      </p>
      <br />
     <p className='space'> ICS
      <br />
      PGC - Faisalabad
      <br />
      2018- 2020 

      </p>
      <p className='space '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue.
      </p>
        
    </div> 
   </div> 

   </>
  
 )}

 export default Cv;