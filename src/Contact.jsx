import React from 'react';

const Contact = () => {
    return (
        <>
         <div className="my-5">
         <h1 className="text-center">Contact Us</h1>
         </div>
         <div className="container contact_div">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
                      
                 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name"/> 
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact Number"/> 
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/> 
  </div>
   <div className="mb-3">
       <label for="exampleFromControlTextarea1" class="form-label">
           Message
       </label>
       <textarea class="form-control" id="exampleFromControlTextarea1" rows="3"></textarea>
   </div>
   
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>



                 </div>
             </div>
         </div>
        </>
    );
};

export default Contact;