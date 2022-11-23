import React from 'react'
import './signup.css'

export default function SignUp() {
    return (
        <div className="signup_wrapper">
            <div className="hero">
               <h2 className="hero_head">The on-demand, all inclusive heathcare management ecosystem</h2>
            </div>
            <div className="form_container">
                 <form>
                     <h2>Create an Account</h2>
                     <div>
                     <label htmlFor="name" >Name*</label>
                     <input type="text" placeholder="Your Name" name='name'/>
                     </div>
                     <div>
                     <label htmlFor="email">Email*</label>
                     <input type="email" placeholder="Your Email" name="email"/>
                     </div>
                     <div>
                     <label htmlFor="telephone">Telephone*</label>
                     <input type="text" name="telephone" placeholder="+220 (2000 000)"/>
                     </div>
                     <div>
                     <label htmlFor="password">Password*</label>
                     <input type="password" placeholder="Your Password" name="password"/>
                     </div>
                     <div>
                     <label htmlFor="confirmpassword">Confirm Passwrod*</label>
                     <input type="text" placeholder="Confirm your password" name="confirmpassword"/>
                     </div>                    
                     <button type="submit">Agree {'&'} Sign Up</button>
                     <p className="already_acc">Already have an account? <a href="signin">Sign In</a></p>
                 </form>
            </div>
        </div>
    )
}
